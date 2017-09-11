class Renderer {
    /**
     * Constructor for Renderer object.
     */
    constructor () {
        /**
         * @const  {int}  The height of the rendering area in pixels.
         */
        this.RENDER_WINDOW_HEIGHT = this.setRenderWindowHeight ();
        /**
         * @const  {int}  The width of the rendering area in pixels.
         */
        this.RENDER_WINDOW_WIDTH = this.setRenderWindowWidth ();
        /**
         * @const  {string}  The path to the tile images.
         */
        this.TILE_PATH = 'content/img/tiles/';
        /**
         * @const  {int}  The size of a map tile in pixels.
         */
        this.BOX_SIZE = 40;
        /**
         * @const  {element}  The render space element.
         */
        this.drawSpace = document.getElementById ('draw-space');
    }

    /**
     * Centers the draw space within the draw space container.
     */
    center () {
        this.drawSpace.style.top = this.RENDER_WINDOW_HEIGHT / 2 + 'px';
        this.drawSpace.style.left = this.RENDER_WINDOW_WIDTH / 2 + 'px';
    }

    /**
    * Using a js map file (maps.js), renders entire map via isometric projection
    * to the screen.
    *
    * @uses  this.drawBox()  Renders individual boxes to the play area.
    * @uses  maps.js->maps   Maps content array holding all map data.
    *
    * @param  {string}  mapName  The name of the map file that is to be rendered.
    */
    generateGrid (mapName) {
        var boardWidth = maps[mapName]['width'];

        for (var x = 0; x < maps[mapName]['data'].length; x++) {
            var box = maps[mapName]['data'][x];

            // Only render if 'render' flag is true
            if (box['render'] === true) {
                this.drawSpace.innerHTML += this.drawBox (
                    box['index'],
                    this.TILE_PATH + box['bg'] + '.png',
                    boardWidth
                );
            } else {
                this.drawSpace.innerHTML += this.drawBox (
                    box['index'],
                    '',
                    boardWidth,
                    true
                );
            }
        }

        this.encaseDrawSpace (mapName);
    }

    /**
     * Draws a tile box to the play area.
     *
     * @param  {int}     index       The index of the box that is currently being
     *                               rendered. The index is linear, starting from 0
     *                               for the first value on the top left and continuing
     *                               from left to right, top to bottom, until reaching
     *                               the bottom right.
     * @param  {string}  tilePath    The path of the tile background resource that is
     *                               to be rendered with the tile.
     * @param  {int}     boardWidth  The width (in tiles) of the current map.
     *
     * @return  {string}  The HTML output of the constructed tile box.
     */
    drawBox (index, tilePath, boardWidth, hidden=false) {
        var topPX = this.BOX_SIZE * ~~(index / boardWidth);
        var leftPX = this.BOX_SIZE * (index % boardWidth);

        var style =
            'style = "' +
            'top: ' + topPX + 'px; ' +
            'left: ' + leftPX + 'px;';

        if (!hidden) {
            style += ' background-image: url(\'' + tilePath + '\');"';
            var classes = 'grid_box';
        } else {
            style += ' "';
            var classes = 'grid_box_hidden';
        }

        return '<div class = "' + classes + '" ' + style + '></div>';
    }

    /**
     * Draws the player element.
     *
     * @param  {int}  index       The index of the box that is currently being
     *                            rendered. The index is linear, starting from 0
     *                            for the first value on the top left and continuing
     *                            from left to right, top to bottom, until reaching
     *                            the bottom right.
     * @param  {int}  boardWidth  The width (in tiles) of the current map.
     *
     * @return {string} The HTML output of the constructed player element.
     */
    drawPlayer (index, boardWidth) {
        var style =
            'style = "' +
            'top: ' + (20 * ~~(index / boardWidth)) + 'px; ' +
            'left: ' + (20 * (index % boardWidth)) + 'px; ' +
            'background-image: url(\'content/img/tile/player.png\');';

        return '<div id = "player" style = ' + style + '></div>';
    }

    /**
     * Sets the height and width of the draw-space div so as to allow for each
     * map panning on a container of absolute (non-inline) elements.
     */
    encaseDrawSpace (mapName) {
        var boardWidth = maps[mapName]['width'];
        var totalTiles = maps[mapName]['data'].length;

        this.drawSpace.style.width = boardWidth * this.BOX_SIZE + 'px';
        this.drawSpace.style.height = ~~(totalTiles / boardWidth) * this.BOX_SIZE + 'px';
    }

    /**
     * Setter for the render window height.
     *
     * @return  {float}  Height of the render window is pixels.
     */
    setRenderWindowHeight () {
        var heightGet =
            window.getComputedStyle (
                document.getElementById ('draw-space-container'),
                null
            ).getPropertyValue ('height');

        return parseFloat (heightGet.substr (0, heightGet.length - 2));
    }

    /**
     * Setter for the render window width.
     *
     * @return  {float}  Width of the render window in pixels.
     */
    setRenderWindowWidth () {
        var widthGet =
            window.getComputedStyle (
                document.getElementById ('draw-space-container'),
                null
            ).getPropertyValue ('width');
            
        return parseFloat (widthGet.substr (0, widthGet.length - 2));
    }
}

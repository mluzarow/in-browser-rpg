/**
* Using a js map file (maps.js), renders entire map to screen.
*
* @uses  drawBox()      Renders individual boxes to the play area.
* @uses  maps.js->maps  Maps content array holding all map data.
*
* @param  {string}  mapName  The name of the map file that is to be rendered.
*/
function gridify (mapName) {
    var drawSpace = document.getElementById('draw-space');
    var boardWidth = maps[mapName]['width'];
    var RESC_PATH = '../content/img/tiles/';

    for (var x = 0; x < maps[mapName]['data'].length; x++) {
        var box = maps[mapName]['data'][x];

        // Only render if 'render' flag is true
        if (box['render'] === true) {
            drawSpace.innerHTML += drawBox (box['index'], RESC_PATH + box['bg'] + '.png', boardWidth, 40);
        } else {
            drawSpace.innerHTML += drawBox (box['index'], '', boardWidth, 40, true);
        }
    }
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
 * @param  {int}     boxSize     The width of the square tiles used in this map.
 *
 * @return  {string}  The HTML output of the constructed tile box.
 */
function drawBox (index, tilePath, boardWidth, boxSize, hidden=false) {
    var style =
        'style = "' +
        'top: ' + (boxSize * ~~(index / boardWidth)) + 'px; ' +
        'left: ' + (boxSize * (index % boardWidth)) + 'px;';

    if (!hidden) {
        style += ' background-image: url(\'' + tilePath + '\');"';
        var classes = 'grid_box';
    } else {
        style += ' "';
        var classes = 'grid_box_hidden';
    }

    return '<div class = "' + classes + '" ' + style + '></div>';
}

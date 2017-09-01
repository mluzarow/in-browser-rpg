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

    for (var box in maps[mapName]['data']) {
        drawSpace.innerHTML += drawBox (box, box['bg'], boardWidth, 40);
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
function drawBox (index, tilePath, boardWidth, boxSize) {
    var style =
        'style = "' +
        'top: ' + (boxSize * ~~(index / boardWidth)) + 'px; ' +
        'left: ' + (boxSize * (index % boardWidth)) + 'px; ' +
        'background-image: url(\'' + tilePath + '.png\'); "';

    return '<div class = "grid_box" ' + style + '></div>';
}

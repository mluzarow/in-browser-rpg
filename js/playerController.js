/**
 * A controller for everything meta to do with the player.
 */
class PlayerController {
    /**
     * Renders the player to the draw space.
     *
     * @param  {int}  x        X-axis index of player position.
     * @param  {int}  dx       Draw space x-axis offset (px).
     * @param  {int}  y        Y-axis index of player position.
     * @param  {int}  dy       Draw space y-axis offset (px).
     * @param  {int}  boxSize  Size of a regular tile.
     */
    static renderPlayer (x, dx, y, dy, boxSize) {
        var style =
            'style = "' +
            'top: ' + ((y * boxSize) + dy + 10) + 'px; ' +
            'left: ' + ((x * boxSize) + dx + 10) + 'px; ' +
            'background-image: url(\'content/img/tiles/player.png\');"';

        document.getElementById('draw-space').innerHTML +=
            '<div class = "player" ' + style + '></div>';
    }
}

/**
* Using a .map file, renders entire map to screen
*
* @uses parseMap() to parse map file into MapTile objects
*
* @param  string  mapName  the name of the map file that is to be rendered
*/
function gridify (mapName) {
    // Parse map as list of MapTile objects
    //var boxList = parseMap (mapName);
    
    document.getElementById('draw-space').innerHTML += drawBox (0, '../data/map/tile/test', 1, 40);
}

function drawBox (index, tilePath, boardWidth, boxSize) {
    var style =
        'style = "' +
        'top: ' + (boxSize * ~~(index / boardWidth)) + 'px; ' +
        'left: ' + (boxSize * (index % boardWidth)) + 'px; ' +
       'background-image: url(\'' + tilePath + '.png\'); "';

    return '<div class = "grid_box" ' + style + '></div>';
}

class MapTile {
    constructor (index, showFlag=true, tileBG=null) {
        this.index = index;
        this.showFlag = showFlag;
        this.tileBG = tileBG;
    }
}

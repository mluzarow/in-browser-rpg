function gridify () {
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

/**
 * Initializes event listeners for the game.
 */
function initializeEventListeners () {
    var tabs = document.getElementsByClassName('side-tab');

    for (var i = 0; i < tabs.length; i++) {
        tabs [i].addEventListener ("mousedown", window [tabs [i].id + "_click"], false);
    }

    document.getElementById ('draw-space-container').addEventListener ("mousedown", mouseDown, false);
    document.getElementById ('draw-space-container').addEventListener ("mouseup", mouseUp, false);
}

function mouseDown (e) {
    // Stop default mouseDown functions while dragging
    e.preventDefault ();
    window.addEventListener ("mousemove", drawSpace_drag, true);
}

function mouseUp () {
    window.removeEventListener ("mousemove", drawSpace_drag, true);
}

function drawSpace_drag (e) {
    r.drawSpace.style.top = e.clientY + 'px';
    r.drawSpace.style.left = e.clientX + 'px';
}

/**
 * Event listener for the tab relating to the summary page. Opens and closes
 * the tab when clicked.
 */
function tab_summary_click () {
    var tabContentBoxes = document.getElementsByClassName ('side-tab-content-wrap');
    var target = document.getElementById ('content_summary');

    // Target tab is currently open, so close it
    if (target.classList.contains ('side-tab-open')) {
        target.classList.remove ('side-tab-open');

    // Target tab is currently closed, so close all others and open this one
    } else {
        for (var i = 0; i < tabContentBoxes.length; i++) {
            tabContentBoxes [i].classList.remove ('side-tab-open');
        }
        target.classList.add ('side-tab-open');
    }
}

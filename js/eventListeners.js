function initializeEventListeners () {
    var tabs = document.getElementsByClassName('side-tab');

    for (var i = 0; i < tabs.length; i++) {
        tabs [i].addEventListener ("mousedown", window [tabs [i].id + "_click"], false);
    }
}

function tab_summary_click () {
    var tabContentBoxes = document.getElementsByClassName ('side-tab-content-wrap');
    var target = document.getElementById ('content_summary');

    // Target tab is currently open, so close it
    if (target.style.width != '0px') {
        target.style.width = '0px';
    // Target tab is currently closed, so close all others and open this one
    } else {
        for (var i = 0; i < tabContentBoxes.length; i++) {
            tabContentBoxes [i].style.width = '0px';
        }

        target.style.width = '280px';
    }
}

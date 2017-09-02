window.onload = function () {
    cleanUpDOM (document.body);
	initializeEventListeners ();
}

/**
 * Removes all whitespace nodes that may be plagueing the document.
 *
 * @param  {element}  node  DOM element to be searched.
 *
 * @return  {element}  Recursive return of child element to be searched.
 */
function cleanUpDOM (node) {
    for(var n = 0; n < node.childNodes.length; n ++) {
        var child = node.childNodes[n];

        if (child.nodeType === 8 || (child.nodeType === 3 && !/\S/.test(child.nodeValue))) {
            node.removeChild(child);
            n --;
        }
        else if(child.nodeType === 1) {
            cleanUpDOM(child);
        }
    }
}

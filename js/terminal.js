/**
 * Converts string terminal output into HTML elements.
 *
 * @param  {string}  input  Message that will be printed to the HTML terminal.
 * @param  {string}  flag   Controls what type of styling the printed element will
 *                          recieve. Settings may be 'error' if it is error text
 *                          that requires attention, 'notification' if it is a
 *                          general system message, or none for general text.
 */
function output (input, flag) {
    if (flag == 'error') {
        var outputText = '<div class = \'output-line error\'>' + input + '</div>';
    } else if (flag == 'notification') {
        var outputText = '<div class = \'output-line notification\'>' + input + '</div>';
    } else {
        var outputText = '<div>' + input + '</div>';
    }

    var outputElement = document.getElementById ('output-container');
    outputElement.innerHTML += outputText;
}

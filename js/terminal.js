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

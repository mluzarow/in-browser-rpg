function output (input, flag) {
    if (flag == 'error') {
        var outputText = '<div class = \'error\'>' + input + '</div>';
    } else if (flag == 'notification') {
        var outputText = '<div class = \'notification\'>' + input + '</div>';
    } else {
        var outputText = '<div>' + input + '</div>';
    }
    
    var outputElement = document.getElementById ('output-container');
    outputElement.innerHTML += outputText;
}
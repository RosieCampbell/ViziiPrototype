registerModule("text", text_ui, text, false);

_timestamp = 0;

function text_ui(div) {
    createTextInput(div, "Text", "textContent", "I Need Air");
    createTextInput(div, "Size", "textSize", "70");
    createTextInput(div, "Font", "fontFamily", "Zapf Chancery");
    createTextInput(div, "Outer Colour", "outerColour", "White");
    createTextInput(div, "Start Time", "lyricsStartTime", "20");
    createTextInput(div, "End Time", "lyricsEndTime", "26");

    setInterval(function () {
        _timestamp++;
    }, 1000);
}

function text() {
    if (kick) {
        var startTime = +$("#lyricsStartTime").val();
        var endTime = +$("#lyricsEndTime").val();

        if (_timestamp > startTime && _timestamp < endTime) {
            var textToShow = $("#textContent").val();

            var x = canvas.width / 2;
            var y = canvas.height / 2 + 35;

            canvasContext.textAlign = 'center';
            var fontSize = getValueFromInput("textSize", "70");
            var fontFamily = getValueFromInput("font", "Zapf Chancery")
            canvasContext.font = 'bold ' + fontSize + 'px ' + fontFamily + ', cursive';
            canvasContext.fillStyle = "Black";
            canvasContext.fillText(textToShow, x, y);
            canvasContext.strokeStyle = getValueFromInput("outerColour", "White");
            canvasContext.strokeText(textToShow, x, y);
            canvasContext.textBaseline = 'bottom';
        }
    }
}
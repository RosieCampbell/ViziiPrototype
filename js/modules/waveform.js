registerModule("waveform", waveform_ui, waveform, false);

function waveform_ui(div) {
    createTextInput(div, "Colour 1", "waveformColour1", "magenta");
    createTextInput(div, "Colour 2", "waveformColour2", "green");
    createTextInput(div, "Colour 3", "waveformColour3", "red");
    createTextInput(div, "Line Width", "waveformLineWidth", "4");
}

function waveform(freqByteData, timeByteData, volume) {
    var barWidth = 1000 / timeAnalyser.frequencyBinCount;
    var waveform = [];
    for (var i = 0; i < timeAnalyser.frequencyBinCount; i++) {
        var value = timeByteData[i];
        var percent = value / 256;
        var height = 200 * percent;
        var offset = 200 - height - 1;
        waveform[i] = offset;
    }

    canvasContext.beginPath();
    canvasContext.moveTo(0, waveform[i]);

    var gradient = canvasContext.createLinearGradient(0, 250, 500, 750);

    gradient.addColorStop("0", getValueFromInput("waveformColour1", "magenta"));
    gradient.addColorStop("0.5", getValueFromInput("waveformColour2", "green"));
    gradient.addColorStop("1.0", getValueFromInput("waveformColour3", "blue"));

    canvasContext.strokeStyle = gradient;

    canvasContext.lineWidth = $("#waveformLineWidth").val();

    for (var i = 0; i < timeAnalyser.frequencyBinCount; i++) {
        canvasContext.lineTo(i * barWidth, waveform[i]);
    }
    canvasContext.stroke();
}
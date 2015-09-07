registerModule("equaliser", equaliser_ui, equaliser, true);

function equaliser_ui(div) {
    createOptionsInput(div, "Shape", "shape", ["circle", "line"], "line");
    createTextInput(div, "Size", "size", "1");
    createTextInput(div, "Width", "width", "10");
    createTextInput(div, "Quantity", "quantity", "17");
    createTextInput(div, "R", "r", "1");
    createTextInput(div, "G", "g", "1");
    createTextInput(div, "B", "b", "1");
    createTextInput(div, "When volume reaches", "volume1", "13500");
    createTextInput(div, "change shape to ", "changeShape", "circle");
    createTextInput(div, "When volume reaches", "volume2", "15000");
    createTextInput(div, "change size to ", "changeSize", "2");

    whenVolumeIsGreaterThan($("volume1").val(), function(event) {
        window.console.log(event.volume);
        $('#shape').val($("changeShape").val());

    });

    volumeEventTriggered2 = false;
    whenVolumeIsGreaterThan2($("volume2").val(), function(event) {
        window.console.log(event.volume);
        $('#size').val($("changeSize").val());
    });
}

function equaliser(freqByteData, timeByteData, volume) {
    var freqsize = +$('#quantity').val() || 1;
    for (var i = 0; i < freqByteData.length; i = i + freqsize) {
        var value = freqByteData[i];
        var percent = value / 256;
        var height = 200 * percent;
        var offset = 200 - height - 1;
        var barWidth = 1000 / freqAnalyser.frequencyBinCount;
        var hue = i / freqAnalyser.frequencyBinCount;
        var sat = percent;
        var rgb = hslToRgb(hue, sat, 0.5);
        var hsl = rgbToHsl(rgb[0] * $('#r').val(), rgb[1] * $('#g').val(), rgb[2] * $('#b').val());
        canvasContext.fillStyle = 'hsl(' + hsl[0] * 360 + ', ' + hsl[1] * 100 + '%, ' + hsl[2] * 100 + '%)';
        if ($('#shape').val() === 'circle') {
            canvasContext.save();
            canvasContext.translate(canvas.width / 2, canvas.height / 2);
            canvasContext.rotate((0.38) * (i + 1) * Math.PI / 180);

            canvasContext.fillRect(0, (volume * $('#size').val()) / 100, $('#width').val(), height);
            canvasContext.restore();
        } else {
            canvasContext.fillRect(50 + i, canvas.height / 2 - height, $('#width').val(), height)
        }
    }
}
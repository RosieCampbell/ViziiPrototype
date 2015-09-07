function neonLightEffect(text) {
    var font = "65px Futura, Helvetica, sans-serif";
    var jitter = 25; // the distance of the maximum jitter
    var offsetX = 30;
    var offsetY = 70;
    var blur = getBlurValue(100);
    canvasContext.font = font;
    // calculate width + height of text-block
    var metrics = getMetrics(text, font);

    // create the rainbow linear-gradient
    var gradient = canvasContext.createLinearGradient(0, 0, metrics.width, 0);
    gradient.addColorStop(0, "rgba(255, 0, 0, 1)");
    gradient.addColorStop(0.15, "rgba(255, 255, 0, 1)");
    gradient.addColorStop(0.3, "rgba(0, 255, 0, 1)");
    gradient.addColorStop(0.5, "rgba(0, 255, 255, 1)");
    gradient.addColorStop(0.65, "rgba(0, 0, 255, 1)");
    gradient.addColorStop(0.8, "rgba(255, 0, 255, 1)");
    gradient.addColorStop(1, "rgba(255, 0, 0, 1)");
    // change composite so source is applied within the shadow-blur
    canvasContext.globalCompositeOperation = "source-atop";
    // apply gradient to shadow-blur
    canvasContext.fillStyle = gradient;
    canvasContext.fillRect(offsetX - jitter/2, offsetY, metrics.width + offsetX, metrics.height + offsetY);
    // change composite to mix as light
    canvasContext.globalCompositeOperation = "lighter";
    // multiply the layer
    canvasContext.globalAlpha = 0.7
    canvasContext.drawImage(canvasContext.canvas, 0, 0);
    canvasContext.drawImage(canvasContext.canvas, 0, 0);
    canvasContext.globalAlpha = 1
    // draw white-text ontop of glow
    canvasContext.fillStyle = "rgba(255,255,255,0.95)";
    canvasContext.fillText(text, offsetX, offsetY + metrics.top);
    // created jittered stroke
    canvasContext.lineWidth = 0.80;
    canvasContext.strokeStyle = "rgba(255,255,255,0.25)";
    var i = 10; while(i--) {
        var left = jitter / 2 - Math.random() * jitter;
        var top = jitter / 2 - Math.random() * jitter;
        canvasContext.strokeText(text, left + offsetX, top + offsetY + metrics.top);
    }
    canvasContext.strokeStyle = "rgba(0,0,0,0.20)";
    canvasContext.strokeText(text, offsetX, offsetY + metrics.top);
    canvasContext.restore();
};

function getBlurValue(blur) {
    var userAgent = navigator.userAgent;
    if (userAgent && userAgent.indexOf('Firefox/4') != -1) {
        var kernelSize = (blur < 8 ? blur / 2 : Math.sqrt(blur * 2));
        var blurRadius = Math.ceil(kernelSize);
        return blurRadius * 2;
    }
    return blur;
};

var createInterlace = function (size, color1, color2) {
    var proto = document.createElement("canvas").getContext("2d");
    proto.canvas.width = size * 2;
    proto.canvas.height = size * 2;
    proto.fillStyle = color1; // top-left
    proto.fillRect(0, 0, size, size);
    proto.fillStyle = color2; // top-right
    proto.fillRect(size, 0, size, size);
    proto.fillStyle = color2; // bottom-left
    proto.fillRect(0, size, size, size);
    proto.fillStyle = color1; // bottom-right
    proto.fillRect(size, size, size, size);
    var pattern = proto.createPattern(proto.canvas, "repeat");
    pattern.data = proto.canvas.toDataURL();
    return pattern;
};

var op_8x8 = createInterlace(8, "#FFF", "#eee");

var image = document.createElement("img");
image.width = 42;
image.height = 1;
image.src = op_8x8.data;
image.style.cssText = "display: inline";

getMetrics = function(text, font) {
    var metrics = document.getElementById("metrics");
    if (metrics) {
        metrics.style.cssText = "display: block";
        var parent = metrics.firstChild;
        parent.firstChild.textContent = text;
    } else {
        // setting up html used for measuring text-metrics
        var parent = document.createElement("span");
        parent.appendChild(document.createTextNode(text));
        parent.appendChild(image);
        var metrics = document.createElement("div");
        metrics.id = "metrics";
        metrics.appendChild(parent);
        document.body.insertBefore(metrics, document.body.firstChild);
    }

    // direction of the text
    var direction = window.getComputedStyle(document.body, "")["direction"];

    // getting css equivalent of canvasContext.measureText()
    parent.style.cssText = "font: " + font + "; white-space: nowrap; display: inline;";
    var width = parent.offsetWidth;
    var height = parent.offsetHeight;

    // capturing the "top" and "bottom" baseline
    parent.style.cssText = "font: " + font + "; white-space: nowrap; display: block;";
    var top = image.offsetTop;
    var bottom = top - height;

    // capturing the "middle" baseline
    parent.style.cssText = "font: " + font + "; white-space: nowrap; line-height: 0; display: block;";
    var middle = image.offsetTop + 1;

    // capturing "1em"
    parent.style.cssText = "font: " + font + "; white-space: nowrap; height: 1em; display: block;";
    parent.firstChild.textContent = "";
    var em = parent.offsetHeight;

    // cleanup
    metrics.style.display = "none";

    return {
        direction: direction,
        top: top,
        em: em,
        middle: middle,
        bottom: bottom,
        height: height,
        width: width
    };
};
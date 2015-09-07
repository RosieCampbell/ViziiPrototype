registerModule("particles", particles_ui, particles, false);

var mp = 25;
var flakes = [];
for (var i = 0; i < mp; i++) {
    flakes.push({
        x: Math.random() * 1000,
        y: Math.random() * 500,
        r: (Math.random() * 4 + 1) * 0.1,
        d: Math.random() * mp
    })
}


function particles_ui(div) {
    createTextInput(div, "Colour", "particlesColour", "white");
}

var angle = 0;

function update() {
    angle += 0.01;
    for (var i = 0; i < mp; i++) {
        var p = flakes[i];

        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;

        if (p.x > 1000 + 5 || p.x < -5 || p.y > 500) {
            if (i % 3 > 0) {
                flakes[i] = {
                    x: Math.random() * 1000,
                    y: -10,
                    r: p.r,
                    d: p.d
                };
            } else {
                if (Math.sin(angle) > 0) {
                    flakes[i] = {
                        x: -5,
                        y: Math.random() * 500,
                        r: p.r,
                        d: p.d
                    };
                } else {
                    flakes[i] = {
                        x: 500 + 5,
                        y: Math.random() * 500,
                        r: p.r,
                        d: p.d
                    };
                }
            }
        }
    }
}

function particles(freqByteData, timeByteData, volume) {
    canvasContext.fillStyle = $("#particlesColour").val();
    canvasContext.beginPath();
    for (var i = 0; i < mp; i++) {
        var p = flakes[i];
        canvasContext.moveTo(p.x, p.y);
        canvasContext.arc(p.x, p.y, (volume / 1000) * p.r, 0, Math.PI * 2, true);
    }
    canvasContext.fill();
    update();
}
/*
 * Created by Cameron Adams on 18th September 2012, modified by Rosie Campbell. July 2014
 * More info here: http://themaninblue.com/writing/perspective/2012/09/18/
 *
 */

var freqAnalyser, canvas, canvasContext, timeAnalyser, flag, container, volumeEventTriggered, volumeEventTriggered2, kick;
window.addEventListener('load', init, false);
var bufferLoader;
var texture;
var sortable = false;
var vignette;
var volume;
var modules = [];
var initialModuleOrder = ["text", "photo", "particles", "waveform", "equaliser", "background"];

var registerModule = function(title, uiControlsCreationFunction, drawFunction, enabledByDefault) {
    var position = 0;

    for (var i = 0; i < initialModuleOrder.length; i++) {
        if (initialModuleOrder[i] === title) {
            position = i;
        }
    }

    modules[position] = {
        title: title,
        createUIControls: uiControlsCreationFunction,
        draw: drawFunction,
        enabledByDefault: enabledByDefault
    };
};

function init() {
    console.log("Hi Julia!");
    kick = false;
    volumeEventTriggered = false;

    var wavesurfer = Object.create(WaveSurfer);

    wavesurfer.init({
        container: document.querySelector('#waveform'),
        waveColor: 'violet',
        progressColor: 'purple',
        height: 40,
        interact: false
    });

    wavesurfer.on('ready', function() {
        wavesurfer.play();

        var timeline = Object.create(WaveSurfer.Timeline);

        timeline.init({
            wavesurfer: wavesurfer,
            container: "#waveformTimeline",
            secondaryColor: "#fff",
            primaryFontColor: "fff",
            secondaryFontColor: "fff"
        });

        setupWebAudio(wavesurfer.backend.source);
        setupDrawingCanvas();
        initUI();
        draw();
    });

    wavesurfer.load('mag.mp3');

    $(document).on("swipeleft", "#mainSection", function(e) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ($.mobile.activePage.jqmData("panel") !== "open") {
            if (e.type === "swipeleft") {
                $("#right-panel").panel("open");
            }
        }
    });
    $("#right-panel").on("panelclose", function(event, ui) {
        resizeCanvas()
    });

    $("#right-panel").panel("open");
}

function initUI() {

    for (var i = 0; i < modules.length; i++) {
        var module = modules[i];
        var group = document.createElement('div');
        group.id = module.title;
        var heading = document.createElement('h3');
        var content = document.createElement('div');

        heading.innerHTML = module.title;
        $(group).append(heading);
        createCheckbox(content, "Is Shown", module.title + "_enabled", module.enabledByDefault);
        $(group).append(content);
        $("#modules").append(group);

        modules[i].createUIControls(content);
    };

    $("#modules").accordion({
        header: "> div > h3",
        collapsible: true,
        active: false
    }).sortable({
        handle: "h3",
        update: sortModules
    });

    sortable = true;
    sortModules();
}

function createTextInput(parentDiv, labelText, id, defaultValue) {
    var div = document.createElement('div');

    var label = document.createElement('label');
    label.innerText = labelText;
    label.className = "inputControl";
    $(div).append(label);

    var input = document.createElement('input');
    input.type = 'text';
    input.id = id;
    input.value = defaultValue;
    $(div).append(input);

    $(parentDiv).append(div);

    return div;
}

function createOptionsInput(parentDiv, labelText, id, options, defaultValue) {
    var div = document.createElement('div');

    var label = document.createElement('label');
    label.innerHTML = labelText;
    label.className = "inputControl";
    $(div).append(label);

    var select = document.createElement('select');
    select.id = id;

    for (var i = 0; i < options.length; i++) {
        var optionElt = document.createElement('option');
        optionElt.value = options[i];
        optionElt.innerHTML = options[i];
        if (options[i] === defaultValue) {
            optionElt.selected = "selected";
        }
        $(select).append(optionElt);
    }

    $(div).append(select);

    $(parentDiv).append(div);

    return div;
}

function createCheckbox(parentDiv, labelText, id, isCheckedByDefault) {
    var div = document.createElement('div');

    var label = document.createElement('label');
    label.innerText = labelText;
    label.className = "inputControl";
    $(div).append(label);

    var input = document.createElement('input');
    input.type = 'checkbox';
    input.className = "checkbox";
    input.id = id;
    input.checked = isCheckedByDefault;

    $(div).append(input);

    $(parentDiv).append(div);

    return div;
}

// Wire up the <audio> element with the Web Audio fr§eqAnalyser (currently Webkit only)
function setupWebAudio(source) {
    // Create a new audio context (that allows us to do all the Web Audio stuff)
    var audioContext = source.context;
    // Create a new analyser
    freqAnalyser = audioContext.createAnalyser();
    timeAnalyser = audioContext.createAnalyser();
    filter = audioContext.createBiquadFilter();
    filter.frequency.value = 10000;

    // Connect up the output from the audio source to the input of the freqAnalyser
    source.connect(filter);
    filter.connect(timeAnalyser);
    source.connect(freqAnalyser);

    audioContext.createDelay = audioContext.createDelay || audioContext.createDelayNode;
    var delay = audioContext.createDelay(4.5);
    // Connect up the audio output of the freqAnalyser to the audioContext destination i.e. the speakers (The freqAnalyser takes the output of the <audio> element and swallows it. If we want to hear the sound of the <audio> element then we need to re-route the freqAnalyser's output to the speakers)
    source.connect(delay);
    delay.connect(audioContext.destination);
    // volumeHasBeenTriggered = false;
    // PubSub.subscribe("volumeChangeEvent", function(event) {
    //     //alert("Loud!");
    // });
}

// Draw the audio frequencies to screen
function draw() {
    requestAnimationFrame(draw);

    // find audio data at every frame
    var freqByteData = new Uint8Array(freqAnalyser.frequencyBinCount);
    freqAnalyser.getByteFrequencyData(freqByteData);
    var timeByteData = new Uint8Array(freqAnalyser.frequencyBinCount);
    timeAnalyser.getByteTimeDomainData(timeByteData);

    var total = 0;
    for (var v = 0; v < 80; v++) {
        total += freqByteData[v];
    }
    volume = total;
    var triggered = false;
    PubSub.publish("volumeChangeEvent", {
        volume: volume
    });
    kick = kickPresent(timeByteData, volume);
    // clear the canvas for redrawing
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    // draw each layer as exists in 'modules', all drawing code for each function must be in its own drawing code
    // pass parameters to each module drawing code from the UI
    for (var i = 0; i < modules.length; i++) {
        var module = modules[i];
        var checkbox = document.getElementById(module.title + "_enabled");
        if(!checkbox || checkbox.checked){
            module.draw(freqByteData, timeByteData, volume);
        }
        
    }
}

function sortModules() {
    if (!sortable) {
        return;
    }

    // This is the order currently defined in the UI
    var sortedModuleTitles = $('#modules').sortable("toArray");

    var sortedModules = [];

    for (var i = sortedModuleTitles.length - 1; i >= 0; i--) {
        var moduleTitle = sortedModuleTitles[i];
        sortedModules.push(getModuleByTitle(moduleTitle));
    }

    modules = sortedModules;
}

function getModuleByTitle(title) {
    for (var i = 0; i < modules.length; i++) {
        if (modules[i].title === title) {
            return modules[i];
        }
    }

    console.log("ERROR: Unable to find module with title " + title + ". Modules are : " + modules);
}

function getValueFromInput(inputId, defaultValue) {
    if ($("#" + inputId)) {
        return $("#" + inputId).val() || defaultValue;
    }

    return defaultValue;
}

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [h, s, l];
}

function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function average(array, start, size) {
    var count = 0;
    for (var i = start; i < start + size; i++) {
        count += array[i];
    };
    var average = count / size;
    return average;
}

// Basic setup for the canvas element, so we can draw something on screen
function setupDrawingCanvas() {
    canvas = document.getElementById('canvas');
    container = $(canvas).parent();
    window.addEventListener('resize', resizeCanvas, false);
    window.addEventListener('orientationchange', resizeCanvas, false);
    canvasContext = canvas.getContext('2d');
    resizeCanvas();
    canvasContext.fillStyle = '#ffffff';
    draw();
    $("#right-panel").on("panelopen", function(event, ui) {
        resizeCanvas()
    });

    var imageObj = new Image();
    imageObj.onload = function() {
        texture = canvasContext.createPattern(imageObj, 'repeat');
    };
    imageObj.src = 'http://img01.deviantart.net/5e6e/i/2010/201/8/a/rice_paper_texture_by_maplerose_stock.jpg';

    vignette = canvasContext.createRadialGradient(canvas.width / 2, canvas.height / 2, 100, canvas.width / 2, canvas.height / 2, 700);
    vignette.addColorStop(0, "transparent");
    vignette.addColorStop(1, "black");
}

function resizeCanvas() {
    container = $(canvas).parent();

    var screen = $.mobile.getScreenHeight(),
        header = $(".ui-header").hasClass("ui-header-fixed") ? $(".ui-header").outerHeight() - 1 : $(".ui-header").outerHeight(),
        footer = $(".ui-footer").hasClass("ui-footer-fixed") ? $(".ui-footer").outerHeight() - 1 : $(".ui-footer").outerHeight(),
        contentCurrent = $(".ui-content").outerHeight() - $(".ui-content").height(),
        content = screen - header - footer - contentCurrent;
    $(".ui-content").height(content);

    // debugger;
    canvas.width = $(container).width(); //max width

    canvas.height = $(container).height(); //max height

    vignette = canvasContext.createRadialGradient(canvas.width / 2, canvas.height / 2, 100, canvas.width / 2, canvas.height / 2, 700);
    vignette.addColorStop(0, "transparent");
    vignette.addColorStop(1, "black");
}

function kickPresent(timeByteData, volume) {
    var top = 0;
    var bottom = 1000;
    for (var i = 0; i < timeAnalyser.frequencyBinCount; i++) {
        if (timeByteData[i] > top) {
            top = timeByteData[i];
        }

        if (timeByteData[i] < bottom) {
            bottom = timeByteData[i];
        }

    }

    return true;
}

var whenVolumeIsGreaterThan = function(volume, thenDoFunction) {
    PubSub.subscribe("volumeChangeEvent", function(event) {
        if (event.volume > volume && !volumeEventTriggered) {
            volumeEventTriggered = true;
            thenDoFunction(event);
        }
    });
};

var whenVolumeIsGreaterThan2 = function(volume, thenDoFunction) {
    PubSub.subscribe("volumeChangeEvent", function(event) {
        if (event.volume > volume && !volumeEventTriggered2) {
            volumeEventTriggered2 = true;
            thenDoFunction(event);
        }
    });
};

PubSub = {
    _listeners: {},

    subscribe: function(eventName, listenerFn) {
        if (!PubSub._listeners[eventName]) {
            PubSub._listeners[eventName] = [];
        }

        PubSub._listeners[eventName].push(listenerFn);
    },

    publish: function(eventName, event) {
        var listenersToInform = PubSub._listeners[eventName];

        if (listenersToInform) {
            for (var i = 0; i < listenersToInform.length; i++) {
                listenersToInform[i](event);
            }
        }
    }
};

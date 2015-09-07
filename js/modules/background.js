registerModule("background", background_ui, background, true);

var FilterDataTypes = {
    ABSOLUTE_VALUE: {levelSuffix: "", defaultValue: "10"},
    PERCENTAGE: {levelSuffix: "%", defaultValue: "30"},
    PIXELS: {levelSuffix: "px", defaultValue: "5"},
    DEGREES: {levelSuffix: "deg", defaultValue: "90"},
    RATIO: {levelSuffix: "", defaultValue: "0.5"}
};

var filters = {
    "none": {},
    "saturate": {dataType: FilterDataTypes.ABSOLUTE_VALUE},
    "grayscale": {dataType: FilterDataTypes.PERCENTAGE},
    "contrast": {dataType: FilterDataTypes.PERCENTAGE},
    "brightness": {dataType: FilterDataTypes.RATIO},
    "blur": {dataType: FilterDataTypes.PIXELS},
    "invert": {dataType: FilterDataTypes.PERCENTAGE},
    "sepia": {dataType: FilterDataTypes.PERCENTAGE},
    "hue-rotate": {dataType: FilterDataTypes.DEGREES},
    "opacity": {dataType: FilterDataTypes.PERCENTAGE}
};

var filterNames = [];

for (var filterName in filters) {
    filterNames.push(filterName);
}

function background_ui(div) {
    var optionsInput = createOptionsInput(div, "Filter", "filter", filterNames, "none");
    createTextInput(div, "Level", "level", "");

    $(optionsInput).change(function () {
        var defaultValue = filters[$("#filter").val()].dataType.defaultValue;
        $("#level").val(defaultValue);
    });

    var optionsInput2 = createOptionsInput(div, "Filter 2", "filter2", filterNames, "none");
    createTextInput(div, "Level 2", "level2", "");

    $(optionsInput2).change(function () {
        var defaultValue = filters[$("#filter2").val()].dataType.defaultValue;
        $("#level2").val(defaultValue);
    });

    createTextInput(div, "Colour", "colour", "black");
    createCheckbox(div, "Vignette", "vignette", false);
    createOptionsInput(div, "Texture", "texture", ["none", "paper"], "none");
}

function background() {
    var filter = $('#filter').val();
    var filter2 = $('#filter2').val();
    var level = $('#level').val();
    var level2 = $('#level2').val();

    $(canvas).css("-webkit-filter", '');

    var filterProperty = "";

    if (filter && filter !== "none") {
        var filterData = filters[filter];
        var levelSuffix = filterData.dataType.levelSuffix || "";
        filterProperty += (filter + '(' + level + levelSuffix + ')');
    }

    if (filter2 && filter2 !== "none") {
        var filterData = filters[filter2];
        var levelSuffix = filterData.dataType.levelSuffix || "";
        filterProperty += (' ' + filter2 + '(' + level2 + levelSuffix + ')');
    }

    $(canvas).css("-webkit-filter", filterProperty);

    canvasContext.fillStyle = $('#colour').val();
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);

    if ($('#texture').val() === "paper") {
        canvasContext.fillStyle = texture;
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    }
    if ($('#vignette').is(':checked')) {
        canvasContext.fillStyle = vignette;
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    }
}
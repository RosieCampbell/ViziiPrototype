(function(window, undefined) {
  var dictionary = {
    "be59456a-5909-461e-9cf2-fbc068580916": "Publish",
    "862ecedf-33ce-4afd-89d0-dbb59035525c": "Notification",
    "66c3aea6-ef18-44d1-9cd8-abc002fc99fa": "Conditionals5",
    "72645772-c94a-4bc0-a521-494f206f4824": "Conditionals4",
    "5d692697-0523-465a-8d7b-be942eec2240": "PLAY Arctic Monkeys",
    "04a21311-ca1c-42f0-8b3c-3f2ccb6c88be": "Conditionals3",
    "0daa6a15-c9f5-496b-8d9a-eb362b227492": "Conditionals2",
    "5f2ab602-a077-4919-9c0d-ec09891c18f4": "Conditionals1",
    "b1af34df-0796-419f-9a37-6eae5924d7a0": "PLAY - Haim The Wire",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Splashscreen",
    "1312f2ae-7f24-4327-bf19-4f48de7df6a3": "Create Canvas",
    "5abce554-166a-4269-900c-1b4a859dfd36": "Finished Canvas",
    "f6a707a7-5dc3-4277-8be8-deba640cdc88": "New Modules",
    "4425cc5f-d9ff-4eee-b7c4-1f8b2d13f9f0": "Facebook Mock",
    "54587c08-0ff3-4553-8f8b-34d1997b0c6d": "PLAY - Ed Sheeran",
    "f602495f-6af7-4598-8a22-50e0fe497292": "Social Landing",
    "0d2f2f76-59db-417f-a08f-8902d247f23c": "Tree",
    "c8a5fb47-923a-45e1-ab2c-e461cf777485": "Landscape Template 2",
    "0dc9dbaa-deab-4781-8fa3-ef2fc6b470a4": "Landscape Template 1",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Portrait Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
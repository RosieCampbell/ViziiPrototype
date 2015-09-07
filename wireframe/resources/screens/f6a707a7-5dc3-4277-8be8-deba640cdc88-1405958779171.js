jQuery("#simulation")
  .on("click", ".s-f6a707a7-5dc3-4277-8be8-deba640cdc88 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Triangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5abce554-166a-4269-900c-1b4a859dfd36"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5f2ab602-a077-4919-9c0d-ec09891c18f4"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_30": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_30": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_30": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_30": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_33": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_33": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_33": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_33": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_32": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_32": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_32": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_32": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_26": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_26": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_26": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_26": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimScrollTo",
                  "parameter": {
                    "target": "#s-Label_26",
                    "axis": "scrollx"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_27": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_27": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_27": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_27": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_28": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_28": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_28": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_28": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_29": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_29": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_29": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_29": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_31": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_31": {
                      "attributes-ie": {
                        "-pie-background": "#0782AC",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 200
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_31": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-f6a707a7-5dc3-4277-8be8-deba640cdc88 #s-Label_31": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });
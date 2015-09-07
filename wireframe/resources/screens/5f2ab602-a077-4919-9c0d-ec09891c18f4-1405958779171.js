jQuery("#simulation")
  .on("click", ".s-5f2ab602-a077-4919-9c0d-ec09891c18f4 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_26": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_26": {
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
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_26": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_26": {
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
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/0daa6a15-c9f5-496b-8d9a-eb362b227492"
                  }
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
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_28": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_28": {
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
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_28": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_28": {
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
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_29": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_29": {
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
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_29": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-5f2ab602-a077-4919-9c0d-ec09891c18f4 #s-Label_29": {
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
    } else if(jFirer.is("#s-Triangle_1")) {
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
    }
  });
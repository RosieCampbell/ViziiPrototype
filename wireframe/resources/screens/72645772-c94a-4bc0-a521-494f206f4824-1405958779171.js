jQuery("#simulation")
  .on("click", ".s-72645772-c94a-4bc0-a521-494f206f4824 .click", function(event, data) {
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
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_26": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_26": {
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
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_26": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_26": {
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66c3aea6-ef18-44d1-9cd8-abc002fc99fa"
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
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_27": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_27": {
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
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_27": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_27": {
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
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_32": {
                      "attributes": {
                        "background-color": "#0782AC",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_32": {
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
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_32": {
                      "attributes": {
                        "background-color": "transparent",
                        "background-image": "none",
                        "font-family": "null,Arial"
                      }
                    }
                  },{
                    "#s-72645772-c94a-4bc0-a521-494f206f4824 #s-Label_32": {
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
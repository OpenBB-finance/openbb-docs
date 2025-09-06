---
title: apps.json Reference
sidebar_position: 2
description: Learn about the structure and configuration of apps.json for creating custom applications in OpenBB Workspace
keywords:
- apps.json
- workspace configuration
- custom apps
- widget layout
- app configuration
- FastAPI endpoint
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="Apps.json Reference | OpenBB Workspace Docs" />

While it is expected for users to create their apps.json from the UI directly, as demonstrated in [Apps](/workspace/analysts/apps). The `apps.json` file follows this structure:

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The name of your app |
| `description` | string | A detailed description of what your app does |
| `img` | string | URL to the app's thumbnail image |
| `img_dark` | string | Optional URL to the app's thumbnail for dark mode |
| `img_light` | string | Optional URL to the app's thumbnail for light mode |
| `allowCustomization` | boolean | Whether users can customize the app |
| `selected_agent` | string | Optional ID of the default AI agent for this app |
| `authentication` | string | Optional authentication requirements |
| `tabs` | object | Collection of tabs, each with an ID, name, and layout configuration |
| `groups` | array | Defines synchronized parameter groups for widgets. |
| `prompts` | array | A list of suggested prompts for the current agent. |

Each tab contains:
- `id`: Unique identifier for the tab
- `name`: Display name for the tab
- `layout`: Array of widget configurations with positioning and state

Each group contains:
- `name`: Display name for the group
- `type`: Type of grouping (e.g., `param`, `endpointParam`).
- `paramName`: The parameter being synchronized
- `widgetIds`: Array of widget IDs in this group
- `defaultValue`: Default value for the parameter

Each prompt is a `string` that represents a question.

For example:

```json

"prompts": [
    "What is the latest CPI inflation momentum?",
    "Show me the year-over-year Core CPI.",
    "What was the last Non-Farm Payrolls (NFP) number?",
    "Plot the 2-year and 10-year Treasury yields.",
    "What is the current 30-year Treasury yield?"
]
```

Each layout contains a reference to a widget:
- `i`: The id of the widget - This will be used to identify the widget in the app (if the widget endpoint is "test/widget_1 the id will be test_widget_1")
- `x`: The x position of the widget
- `y`: The y position of the widget
- `w`: The width of the widget
- `h`: The height of the widget
- `state`: The state of the widget

### Setting up the Apps endpoint

To serve custom apps, you need to define an endpoint in your FastAPI application that returns the content of your `apps.json` file.

Here's how to define the `/apps.json` endpoint in your FastAPI application:

```python
from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI()

@app.get("/apps.json")
async def get_apps():
    # Load your apps.json file
    with open("path/to/your/apps.json", "r") as f:
        apps_config = json.load(f)
    return JSONResponse(content=apps_config)
```

Your custom apps will appear in the OpenBB Workspace under the "Apps" tab in the "My Apps" section, as shown in here:

<img width="800" alt="OpenBB Workspace Multiple Applications View" src="https://openbb-cms.directus.app/assets/2fc9097e-0941-49df-8d83-7d6b5a87bb45.png" />

**Note**: The ideal image size is 250x200px

Remember, the best part is that you can build your own apps tailored to your specific needs.

## Examples

### DTCC Trade Apps

<details>
<summary mdxType="summary">DTCC Trade App Example</summary>

```json
[
  {
    "name": "DTCC Swaps Trade Repository",
    "img": "https://media.licdn.com/dms/image/v2/C4D12AQG0nFj-PESmJg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1632343844606?e=2147483647&v=beta&t=M9BQQUK_UbW2fIIPNAs_kZ8iVCI1IKqjU3cKcOpbMG4",
    "img_dark": "",
    "img_light": "",
    "description": "A demonstration application utilizing data from the DTCC Trade Repository.",
    "allowCustomization": true,
    "tabs": {
      "": {
        "id": "",
        "name": "",
        "layout": [
          {
            "i": "swap_rate_levels_custom_obb",
            "x": 0,
            "y": 0,
            "w": 20,
            "h": 11,
            "state": {
              "params": {
                "tenor": [
                  "2s10s",
                  "1s5s"
                ]
              },
              "chartView": {
                "enabled": true,
                "chartType": "line"
              },
              "chartModel": {
                "modelType": "range",
                "chartType": "line",
                "chartOptions": {
                  "theme": {
                    "baseTheme": "ag-default-dark",
                    "overrides": {
                      "pie": {
                        "series": {
                          "calloutLabel": {

                          },
                          "sectorLabel": {
                            "enabled": true
                          }
                        }
                      },
                      "donut": {
                        "series": {
                          "calloutLabel": {

                          },
                          "sectorLabel": {
                            "enabled": true
                          }
                        }
                      },
                      "scatter": {
                        "axes": {
                          "number": {
                            "title": {
                              "fontSize": 11,
                              "spacing": 10,
                              "enabled": true,
                              "text": ""
                            }
                          }
                        }
                      },
                      "common": {
                        "axes": {
                          "number": {
                            "label": {

                            }
                          },
                          "angle-number": {
                            "label": {

                            }
                          },
                          "radius-number": {
                            "label": {

                            }
                          }
                        },
                        "padding": {
                          "top": 20,
                          "bottom": 5,
                          "left": 20,
                          "right": 40
                        },
                        "background": {
                          "visible": false
                        },
                        "zoom": {
                          "enabled": true,
                          "anchorPointX": "pointer",
                          "anchorPointY": "pointer",
                          "minVisibleItems": 4,
                          "autoScaling": {
                            "enabled": true
                          }
                        },
                        "legend": {
                          "position": "top",
                          "maxHeight": 50,
                          "spacing": 20,
                          "item": {
                            "paddingX": 32,
                            "paddingY": 8,
                            "marker": {
                              "shape": "square",
                              "padding": 5,
                              "size": 11
                            },
                            "label": {
                              "color": "#fff",
                              "fontSize": 11
                            }
                          }
                        },
                        "title": {
                          "fontSize": 12
                        }
                      }
                    }
                  },
                  "common": {
                    "axes": {
                      "category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5,
                          "autoRotate": true
                        },
                        "position": "bottom"
                      },
                      "radius-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "angle-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "grouped-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "number": {
                        "type": "number",
                        "position": "left",
                        "crosshair": {
                          "label": {

                          }
                        },
                        "label": {
                          "fontSize": 11,
                          "autoRotate": false,
                          "avoidCollisions": true
                        }
                      },
                      "time": {
                        "type": "time",
                        "position": "bottom",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "rotation": 0
                        }
                      }
                    },
                    "legend": {
                      "position": "top",
                      "maxHeight": 50,
                      "spacing": 20,
                      "item": {
                        "paddingX": 32,
                        "paddingY": 8,
                        "marker": {
                          "shape": "square",
                          "padding": 5,
                          "size": 11
                        },
                        "label": {
                          "color": "#fff",
                          "fontSize": 11
                        }
                      }
                    }
                  },
                  "line": {
                    "series": {
                      "marker": {
                        "enabled": false
                      },
                      "connectMissingData": true,
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    },
                    "legend": {
                      "enabled": true,
                      "position": "bottom",
                      "item": {
                        "marker": {
                          "size": 10
                        },
                        "paddingX": 10,
                        "paddingY": 10
                      }
                    },
                    "title": {
                      "enabled": true,
                      "text": "Interest Rate Levels (%)"
                    }
                  },
                  "pie": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "calloutLabel": {
                        "enabled": true
                      },
                      "sectorLabel": {
                        "enabled": true
                      }
                    }
                  },
                  "donut": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "calloutLabel": {
                        "enabled": true
                      },
                      "sectorLabel": {
                        "enabled": true
                      }
                    }
                  },
                  "area": {
                    "series": {
                      "marker": {
                        "enabled": false
                      },
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    }
                  },
                  "bubble": {
                    "series": {
                      "marker": {
                        "enabled": false
                      },
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    }
                  },
                  "histogram": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "bar": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "outside-end"
                      }
                    }
                  },
                  "scatter": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "top"
                      }
                    }
                  },
                  "treemap": {
                    "series": {
                      "group": {
                        "label": {
                          "enabled": true
                        }
                      },
                      "tile": {
                        "label": {
                          "enabled": true
                        }
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "sunburst": {
                    "series": {
                      "tooltip": {
                        "enabled": true,
                        "position": {
                          "type": "pointer"
                        },
                        "interaction": {
                          "enabled": true
                        }
                      },
                      "label": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "heatmap": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "waterfall": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "inside"
                      }
                    }
                  },
                  "radar-line": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radar-area": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radial-bar": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radial-column": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "nightingale": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  }
                },
                "cellRange": {
                  "columns": [
                    "date",
                    "ois_one_year_five_year_spread",
                    "ois_two_year_ten_year_spread"
                  ]
                },
                "suppressChartRanges": true
              },
              "columnState": {
                "default_undefined": {
                  "version": "33.2.1",
                  "sort": {
                    "sortModel": [
                      {
                        "colId": "date",
                        "sort": "asc"
                      }
                    ]
                  },
                  "columnPinning": {
                    "leftColIds": [
                      "date"
                    ],
                    "rightColIds": []
                  }
                }
              }
            }
          },
          {
            "i": "swap_rate_volume_custom_obb",
            "x": 20,
            "y": 0,
            "w": 19,
            "h": 11,
            "state": {
              "params": {
                "bucket": []
              },
              "chartView": {
                "enabled": true,
                "chartType": "line"
              },
              "chartModel": {
                "modelType": "range",
                "chartType": "customCombo",
                "chartOptions": {
                  "theme": {
                    "baseTheme": "ag-default-dark",
                    "overrides": {
                      "pie": {
                        "series": {
                          "calloutLabel": {

                          },
                          "sectorLabel": {
                            "enabled": true
                          }
                        }
                      },
                      "donut": {
                        "series": {
                          "calloutLabel": {

                          },
                          "sectorLabel": {
                            "enabled": true
                          }
                        }
                      },
                      "scatter": {
                        "axes": {
                          "number": {
                            "title": {
                              "fontSize": 11,
                              "spacing": 10,
                              "enabled": true,
                              "text": ""
                            }
                          }
                        }
                      },
                      "common": {
                        "axes": {
                          "number": {
                            "label": {

                            }
                          },
                          "angle-number": {
                            "label": {

                            }
                          },
                          "radius-number": {
                            "label": {

                            }
                          }
                        },
                        "padding": {
                          "top": 20,
                          "bottom": 5,
                          "left": 20,
                          "right": 40
                        },
                        "background": {
                          "visible": false
                        },
                        "zoom": {
                          "enabled": true,
                          "anchorPointX": "pointer",
                          "anchorPointY": "pointer",
                          "minVisibleItems": 4,
                          "autoScaling": {
                            "enabled": true
                          }
                        },
                        "legend": {
                          "position": "top",
                          "maxHeight": 50,
                          "spacing": 20,
                          "item": {
                            "paddingX": 32,
                            "paddingY": 8,
                            "marker": {
                              "shape": "square",
                              "padding": 5,
                              "size": 11
                            },
                            "label": {
                              "color": "#fff",
                              "fontSize": 11
                            }
                          }
                        },
                        "title": {
                          "fontSize": 12
                        }
                      }
                    }
                  },
                  "common": {
                    "axes": {
                      "category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5,
                          "autoRotate": true
                        },
                        "position": "bottom"
                      },
                      "radius-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "angle-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "grouped-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "number": {
                        "type": "number",
                        "position": "left",
                        "crosshair": {
                          "label": {

                          }
                        },
                        "label": {
                          "fontSize": 11,
                          "autoRotate": false,
                          "avoidCollisions": true
                        }
                      },
                      "time": {
                        "type": "time",
                        "position": "bottom",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "rotation": 0
                        }
                      }
                    },
                    "legend": {
                      "position": "bottom",
                      "maxHeight": 50,
                      "spacing": 10,
                      "item": {
                        "paddingX": 18,
                        "paddingY": 5,
                        "marker": {
                          "shape": "square",
                          "padding": 5,
                          "size": 10
                        },
                        "label": {
                          "color": "#fff",
                          "fontSize": 11
                        }
                      }
                    },
                    "title": {
                      "enabled": true,
                      "text": "Notional Trading Volumes ($)"
                    }
                  },
                  "line": {
                    "series": {
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      },
                      "strokeOpacity": 0.7,
                      "marker": {
                        "enabled": false
                      },
                      "lineDash": [0],
                      "strokeWidth": 2
                    },
                    "legend": {
                      "position": "bottom",
                      "item": {
                        "marker": {
                          "size": 10,
                          "padding": 5
                        },
                        "paddingX": 18,
                        "paddingY": 5
                      },
                      "spacing": 10
                    },
                    "title": {
                      "enabled": true,
                      "text": "Notional Trading Volumes ($)"
                    }
                  },
                  "pie": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "calloutLabel": {
                        "enabled": true
                      },
                      "sectorLabel": {
                        "enabled": true
                      }
                    }
                  },
                  "donut": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "calloutLabel": {
                        "enabled": true
                      },
                      "sectorLabel": {
                        "enabled": true
                      }
                    }
                  },
                  "area": {
                    "series": {
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    },
                    "legend": {
                      "position": "bottom",
                      "item": {
                        "marker": {
                          "size": 10,
                          "padding": 5
                        },
                        "paddingX": 18,
                        "paddingY": 5
                      },
                      "spacing": 10
                    },
                    "title": {
                      "enabled": true,
                      "text": "Notional Trading Volumes ($)"
                    }
                  },
                  "bubble": {
                    "series": {
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    }
                  },
                  "histogram": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "bar": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "outside-end"
                      }
                    },
                    "legend": {
                      "position": "bottom",
                      "item": {
                        "marker": {
                          "size": 10,
                          "padding": 5
                        },
                        "paddingX": 18,
                        "paddingY": 5
                      },
                      "spacing": 10
                    },
                    "title": {
                      "enabled": true,
                      "text": "Notional Trading Volumes ($)"
                    }
                  },
                  "scatter": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "top"
                      }
                    }
                  },
                  "treemap": {
                    "series": {
                      "group": {
                        "label": {
                          "enabled": true
                        }
                      },
                      "tile": {
                        "label": {
                          "enabled": true
                        }
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "sunburst": {
                    "series": {
                      "tooltip": {
                        "enabled": true,
                        "position": {
                          "type": "pointer"
                        },
                        "interaction": {
                          "enabled": true
                        }
                      },
                      "label": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "heatmap": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "waterfall": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "inside"
                      }
                    }
                  },
                  "radar-line": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radar-area": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radial-bar": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radial-column": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "nightingale": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  }
                },
                "cellRange": {
                  "columns": [
                    "date",
                    "libor_volume",
                    "ois_volume",
                    "total_5d_ma_volume"
                  ]
                },
                "suppressChartRanges": true,
                "seriesChartTypes": [
                  {
                    "colId": "libor_volume",
                    "chartType": "groupedColumn",
                    "secondaryAxis": false
                  },
                  {
                    "colId": "ois_volume",
                    "chartType": "groupedColumn",
                    "secondaryAxis": false
                  },
                  {
                    "colId": "total_5d_ma_volume",
                    "chartType": "line",
                    "secondaryAxis": false
                  }
                ]
              },
              "columnState": {
                "default_undefined": {
                  "version": "33.2.1",
                  "cellSelection": {
                    "cellRanges": [
                      {
                        "startRow": {
                          "rowIndex": 0,
                          "rowPinned": null
                        },
                        "endRow": {
                          "rowIndex": 0,
                          "rowPinned": null
                        },
                        "colIds": [
                          "libor_volume"
                        ],
                        "startColId": "libor_volume"
                      }
                    ]
                  },
                  "columnPinning": {
                    "leftColIds": [
                      "date"
                    ],
                    "rightColIds": []
                  },
                  "focusedCell": {
                    "colId": "libor_volume",
                    "rowIndex": 0,
                    "rowPinned": null
                  },
                  "rangeSelection": {
                    "cellRanges": [
                      {
                        "startRow": {
                          "rowIndex": 0,
                          "rowPinned": null
                        },
                        "endRow": {
                          "rowIndex": 0,
                          "rowPinned": null
                        },
                        "colIds": [
                          "libor_volume"
                        ],
                        "startColId": "libor_volume"
                      }
                    ]
                  }
                }
              }
            }
          },
          {
            "i": "trade_distribution_custom_obb",
            "x": 0,
            "y": 11,
            "w": 20,
            "h": 14,
            "state": {
              "params": {
                "swap_type": "OIS"
              },
              "chartView": {
                "enabled": true,
                "chartType": "line"
              },
              "chartModel": {
                "modelType": "range",
                "chartType": "groupedColumn",
                "chartOptions": {
                  "theme": {
                    "baseTheme": "ag-default-dark",
                    "overrides": {
                      "pie": {
                        "series": {
                          "calloutLabel": {

                          },
                          "sectorLabel": {
                            "enabled": true
                          }
                        }
                      },
                      "donut": {
                        "series": {
                          "calloutLabel": {

                          },
                          "sectorLabel": {
                            "enabled": true
                          }
                        }
                      },
                      "scatter": {
                        "axes": {
                          "number": {
                            "title": {
                              "fontSize": 11,
                              "spacing": 10,
                              "enabled": true,
                              "text": ""
                            }
                          }
                        }
                      },
                      "common": {
                        "axes": {
                          "number": {
                            "label": {

                            }
                          },
                          "angle-number": {
                            "label": {

                            }
                          },
                          "radius-number": {
                            "label": {

                            }
                          }
                        },
                        "padding": {
                          "top": 20,
                          "bottom": 5,
                          "left": 20,
                          "right": 40
                        },
                        "background": {
                          "visible": false
                        },
                        "zoom": {
                          "enabled": true,
                          "anchorPointX": "pointer",
                          "anchorPointY": "pointer",
                          "minVisibleItems": 4,
                          "autoScaling": {
                            "enabled": true
                          }
                        },
                        "legend": {
                          "position": "top",
                          "maxHeight": 50,
                          "spacing": 20,
                          "item": {
                            "paddingX": 32,
                            "paddingY": 8,
                            "marker": {
                              "shape": "square",
                              "padding": 5,
                              "size": 11
                            },
                            "label": {
                              "color": "#fff",
                              "fontSize": 11
                            }
                          }
                        },
                        "title": {
                          "fontSize": 12
                        }
                      }
                    }
                  },
                  "common": {
                    "axes": {
                      "category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5,
                          "autoRotate": true
                        },
                        "position": "bottom"
                      },
                      "radius-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "angle-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "grouped-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "number": {
                        "type": "number",
                        "position": "left",
                        "crosshair": {
                          "label": {

                          }
                        },
                        "label": {
                          "fontSize": 11,
                          "autoRotate": false,
                          "avoidCollisions": true
                        }
                      },
                      "time": {
                        "type": "time",
                        "position": "bottom",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "rotation": 0
                        }
                      }
                    },
                    "legend": {
                      "position": "top",
                      "maxHeight": 50,
                      "spacing": 20,
                      "item": {
                        "paddingX": 32,
                        "paddingY": 8,
                        "marker": {
                          "shape": "square",
                          "padding": 5,
                          "size": 11
                        },
                        "label": {
                          "color": "#fff",
                          "fontSize": 11
                        }
                      }
                    }
                  },
                  "line": {
                    "series": {
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    }
                  },
                  "pie": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "calloutLabel": {
                        "enabled": true
                      },
                      "sectorLabel": {
                        "enabled": true
                      }
                    }
                  },
                  "donut": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "calloutLabel": {
                        "enabled": true
                      },
                      "sectorLabel": {
                        "enabled": true
                      }
                    }
                  },
                  "area": {
                    "series": {
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    }
                  },
                  "bubble": {
                    "series": {
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    }
                  },
                  "histogram": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "bar": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "outside-end"
                      }
                    },
                    "title": {
                      "enabled": true,
                      "text": "Distribution Of Trades On Date ($)"
                    }
                  },
                  "scatter": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "top"
                      }
                    }
                  },
                  "treemap": {
                    "series": {
                      "group": {
                        "label": {
                          "enabled": true
                        }
                      },
                      "tile": {
                        "label": {
                          "enabled": true
                        }
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "sunburst": {
                    "series": {
                      "tooltip": {
                        "enabled": true,
                        "position": {
                          "type": "pointer"
                        },
                        "interaction": {
                          "enabled": true
                        }
                      },
                      "label": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "heatmap": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "waterfall": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "inside"
                      }
                    }
                  },
                  "radar-line": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radar-area": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radial-bar": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radial-column": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "nightingale": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  }
                },
                "cellRange": {
                  "columns": [
                    "one_to_three_year",
                    "three_to_four_year",
                    "four_to_five_year",
                    "five_to_seven_year",
                    "seven_to_ten_year",
                    "ten_to_fifteen_year",
                    "fifteen_to_twenty_year"
                  ]
                },
                "switchCategorySeries": true,
                "suppressChartRanges": true
              },
              "columnState": {
                "default_undefined": {
                  "version": "33.2.1"
                }
              }
            }
          },
          {
            "i": "swap_trades_custom_obb",
            "x": 20,
            "y": 11,
            "w": 19,
            "h": 14,
            "state": {
              "params": {
                "cleared_only": "false",
                "include_starting": "false"
              },
              "chartView": {
                "enabled": true,
                "chartType": "line"
              },
              "chartModel": {
                "modelType": "range",
                "chartType": "line",
                "chartOptions": {
                  "bubble": {
                    "legend": {
                      "enabled": true
                    },
                    "series": {
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      },
                      "marker": {
                        "enabled": true,
                        "size": 17
                      }
                    },
                    "paired": true
                  },
                  "line": {
                    "legend": {
                      "enabled": true,
                      "position": "bottom",
                      "item": {
                        "marker": {
                          "size": 10,
                          "padding": 2
                        },
                        "paddingX": 10
                      },
                      "spacing": 21
                    },
                    "series": {
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      },
                      "marker": {
                        "enabled": true,
                        "size": 13
                      },
                      "strokeWidth": 0,
                      "connectMissingData": true,
                      "strokeOpacity": 1
                    },
                    "padding": {
                      "top": 16,
                      "right": 20,
                      "bottom": 9,
                      "left": 9
                    },
                    "axes": {
                      "category": {
                        "bottom": {
                          "label": {
                            "spacing": 9
                          }
                        },
                        "top": {
                          "label": {
                            "spacing": 9
                          }
                        }
                      },
                      "number": {
                        "bottom": {
                          "gridLine": {
                            "enabled": false
                          },
                          "tick": {
                            "enabled": true,
                            "size": 5,
                            "width": 2
                          },
                          "label": {
                            "spacing": 7
                          },
                          "title": {
                            "enabled": false,
                            "text": "Time To Maturity"
                          }
                        },
                        "top": {
                          "gridLine": {
                            "enabled": false
                          },
                          "tick": {
                            "enabled": true,
                            "size": 5,
                            "width": 2
                          },
                          "label": {
                            "spacing": 7
                          },
                          "title": {
                            "enabled": false,
                            "text": "Time To Maturity"
                          }
                        },
                        "left": {
                          "title": {
                            "enabled": false,
                            "text": "Interest Rate (%)",
                            "spacing": 11
                          }
                        },
                        "right": {
                          "title": {
                            "enabled": false,
                            "text": "Interest Rate (%)",
                            "spacing": 11
                          }
                        }
                      }
                    },
                    "title": {
                      "enabled": true,
                      "text": "Swaps Traded On Date (%)",
                      "spacing": 20
                    }
                  },
                  "theme": {
                    "baseTheme": "ag-default-dark",
                    "overrides": {
                      "pie": {
                        "series": {
                          "calloutLabel": {

                          },
                          "sectorLabel": {
                            "enabled": true
                          }
                        }
                      },
                      "donut": {
                        "series": {
                          "calloutLabel": {

                          },
                          "sectorLabel": {
                            "enabled": true
                          }
                        }
                      },
                      "scatter": {
                        "axes": {
                          "number": {
                            "title": {
                              "fontSize": 11,
                              "spacing": 10,
                              "enabled": true,
                              "text": ""
                            }
                          }
                        }
                      },
                      "common": {
                        "axes": {
                          "number": {
                            "label": {

                            }
                          },
                          "angle-number": {
                            "label": {

                            }
                          },
                          "radius-number": {
                            "label": {

                            }
                          }
                        },
                        "padding": {
                          "top": 20,
                          "bottom": 5,
                          "left": 20,
                          "right": 40
                        },
                        "background": {
                          "visible": false
                        },
                        "zoom": {
                          "enabled": true,
                          "anchorPointX": "pointer",
                          "anchorPointY": "pointer",
                          "minVisibleItems": 4,
                          "autoScaling": {
                            "enabled": true
                          }
                        },
                        "legend": {
                          "position": "top",
                          "maxHeight": 50,
                          "spacing": 20,
                          "item": {
                            "paddingX": 32,
                            "paddingY": 8,
                            "marker": {
                              "shape": "square",
                              "padding": 5,
                              "size": 11
                            },
                            "label": {
                              "color": "#fff",
                              "fontSize": 11
                            }
                          }
                        },
                        "title": {
                          "fontSize": 12
                        }
                      }
                    }
                  },
                  "common": {
                    "axes": {
                      "category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5,
                          "autoRotate": true
                        },
                        "position": "bottom"
                      },
                      "radius-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "angle-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "grouped-category": {
                        "type": "category",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "minSpacing": 5
                        }
                      },
                      "number": {
                        "type": "number",
                        "position": "left",
                        "crosshair": {
                          "label": {

                          }
                        },
                        "label": {
                          "fontSize": 11,
                          "autoRotate": false,
                          "avoidCollisions": true
                        }
                      },
                      "time": {
                        "type": "time",
                        "position": "bottom",
                        "label": {
                          "avoidCollisions": true,
                          "fontSize": 11,
                          "rotation": 0
                        }
                      }
                    },
                    "legend": {
                      "position": "top",
                      "maxHeight": 50,
                      "spacing": 20,
                      "item": {
                        "paddingX": 32,
                        "paddingY": 8,
                        "marker": {
                          "shape": "square",
                          "padding": 5,
                          "size": 11
                        },
                        "label": {
                          "color": "#fff",
                          "fontSize": 11
                        }
                      }
                    }
                  },
                  "pie": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "calloutLabel": {
                        "enabled": true
                      },
                      "sectorLabel": {
                        "enabled": true
                      }
                    }
                  },
                  "donut": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "calloutLabel": {
                        "enabled": true
                      },
                      "sectorLabel": {
                        "enabled": true
                      }
                    }
                  },
                  "area": {
                    "series": {
                      "label": {
                        "enabled": false
                      },
                      "tooltip": {
                        "enabled": true
                      },
                      "marker": {
                        "enabled": true,
                        "size": 17
                      }
                    }
                  },
                  "histogram": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "bar": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "outside-end"
                      }
                    }
                  },
                  "scatter": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "top"
                      }
                    }
                  },
                  "treemap": {
                    "series": {
                      "group": {
                        "label": {
                          "enabled": true
                        }
                      },
                      "tile": {
                        "label": {
                          "enabled": true
                        }
                      },
                      "tooltip": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "sunburst": {
                    "series": {
                      "tooltip": {
                        "enabled": true,
                        "position": {
                          "type": "pointer"
                        },
                        "interaction": {
                          "enabled": true
                        }
                      },
                      "label": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "heatmap": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": true
                      }
                    },
                    "padding": {
                      "bottom": 10
                    }
                  },
                  "waterfall": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false,
                        "placement": "inside"
                      }
                    }
                  },
                  "radar-line": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radar-area": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radial-bar": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "radial-column": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  },
                  "nightingale": {
                    "series": {
                      "tooltip": {
                        "enabled": true
                      },
                      "label": {
                        "enabled": false
                      }
                    }
                  }
                },
                "cellRange": {
                  "columns": [
                    "tenor",
                    "pricing_rate",
                    "cleared_and_spot_starting",
                    "uncleared_and_forward_starting"
                  ]
                },
                "suppressChartRanges": true
              },
              "columnState": {
                "default_undefined": {
                  "version": "33.2.1"
                }
              }
            }
          }
        ]
      }
    },
    "groups": [
      {
        "name": "Group 1",
        "type": "param",
        "paramName": "period",
        "defaultValue": "1y",
        "widgetIds": [
          "swap_rate_levels_custom_obb",
          "swap_rate_volume_custom_obb"
        ]
      },
      {
        "name": "Group 2",
        "type": "param",
        "paramName": "currency",
        "defaultValue": "USD",
        "widgetIds": [
          "swap_rate_levels_custom_obb",
          "swap_rate_volume_custom_obb",
          "trade_distribution_custom_obb",
          "swap_trades_custom_obb"
        ]
      },
      {
        "name": "Group 3",
        "type": "param",
        "paramName": "swap_type",
        "defaultValue": "OIS",
        "widgetIds": [
          "swap_rate_levels_custom_obb",
          "trade_distribution_custom_obb"
        ]
      },
      {
        "name": "Group 4",
        "type": "param",
        "paramName": "stat",
        "defaultValue": "Notional",
        "widgetIds": [
          "swap_rate_volume_custom_obb",
          "trade_distribution_custom_obb"
        ]
      }
    ],
    "prompts": [
      "What are the latest OIS swap rate levels?",
      "Show me the notional trading volumes for LIBOR vs OIS.",
      "What is the distribution of trades for USD swaps?",
      "Compare cleared vs. uncleared swap trades.",
      "What's the 5-day moving average volume for swaps?"
    ]
  }
]
```

</details>

### FRED

<details>
<summary mdxType="summary">FRED App Example</summary>

```json
{
  "name": "Your_FED",
  "img": "https://ohiocapitaljournal.com/wp-content/uploads/2024/08/GettyImages-2164058797-scaled-1-2048x1366.jpg",
  "img_dark": "https://ohiocapitaljournal.com/wp-content/uploads/2024/08/GettyImages-2164058797-scaled-1-2048x1366.jpg",
  "img_light": "https://ohiocapitaljournal.com/wp-content/uploads/2024/08/GettyImages-2164058797-scaled-1-2048x1366.jpg",
  "description": "Make The charts that mater to you always live",
  "allowCustomization": true,
  "tabs": {
    "overview": {
      "id": "overview",
      "name": "Overview",
      "layout": [
        {
          "i": "fred_chart",
          "x": 0,
          "y": 2,
          "w": 20,
          "h": 16,
          "state": {
            "params": {
              "start": "1970-01-01"
            }
          }
        },
        {
          "i": "fred_chart",
          "x": 20,
          "y": 2,
          "w": 20,
          "h": 16,
          "state": {
            "params": {
              "query": "CPI 12-month@CPIAUCSL.p12.m100,CPI 6-month@CPIAUCSL.p6.pa2,CPI 3-month@CPIAUCSL.p3.pa4",
              "title": "CPI Inflation Momentum",
              "chart": "line"
            }
          }
        },
        {
          "i": "fred_chart",
          "x": 0,
          "y": 18,
          "w": 20,
          "h": 16,
          "state": {
            "params": {
              "query": "Core CPI YoY@CPILFESL.p12.m100,CPI YoY@CPIAUCSL.p12.m100",
              "start": "2000-01-01"
            }
          }
        },
        {
          "i": "fred_chart",
          "x": 20,
          "y": 18,
          "w": 20,
          "h": 16,
          "state": {
            "params": {
              "query": "NFP@PAYEMS.d1.m1000",
              "title": "NFP Changes "
            }
          }
        },
        {
          "i": "fred_chart",
          "x": 0,
          "y": 34,
          "w": 20,
          "h": 16,
          "state": {
            "params": {
              "query": "DGS2,DGS5,DGS10,DGS30"
            }
          }
        }
      ]
    }
  },
  "groups": [],
  "prompts": [
    "What is the latest CPI inflation momentum?",
    "Show me the year-over-year Core CPI.",
    "What was the last Non-Farm Payrolls (NFP) number?",
    "Plot the 2-year and 10-year Treasury yields.",
    "What is the current 30-year Treasury yield?"
  ]
}
```

</details>

### FED Net Liquidity

<details>
<summary mdxType="summary">FED Net Liquidity App Example</summary>

```json
[
  {
    "name": "Fed Net Liquidity",
    "img": "https://static.vecteezy.com/system/resources/thumbnails/027/221/813/small_2x/fed-text-in-wooden-circle-on-banknotes-background-credit-card-piggybank-calculator-federal-reserve-board-system-federal-reserve-interest-rate-hike-global-economy-recession-and-finance-concept-photo.jpg",
    "img_dark": "https://static.vecteezy.com/system/resources/thumbnails/027/221/813/small_2x/fed-text-in-wooden-circle-on-banknotes-background-credit-card-piggybank-calculator-federal-reserve-board-system-federal-reserve-interest-rate-hike-global-economy-recession-and-finance-concept-photo.jpg",
    "img_light": "https://static.vecteezy.com/system/resources/thumbnails/027/221/813/small_2x/fed-text-in-wooden-circle-on-banknotes-background-credit-card-piggybank-calculator-federal-reserve-board-system-federal-reserve-interest-rate-hike-global-economy-recession-and-finance-concept-photo.jpg",
    "description": "Data curated by @dharmatrade",
    "allowCustomization": true,
    "tabs": {
      "fed-net-liquidity": {
        "id": "fed-net-liquidity",
        "name": "FED Net Liquidity",
        "layout": [
          {
            "i": "fed-net-liquidity",
            "x": 0,
            "y": 17,
            "w": 40,
            "h": 15
          },
          {
            "i": "fed-net-liquidity-all",
            "x": 0,
            "y": 32,
            "w": 40,
            "h": 15
          },
          {
            "i": "fed-net-liquidity-data",
            "x": 0,
            "y": 2,
            "w": 40,
            "h": 15,
            "state": {
              "chartView": {
                "enabled": false,
                "chartType": "line"
              }
            }
          }
        ]
      },
      "mts-income-taxes": {
        "id": "mts-income-taxes",
        "name": "MTS Income Taxes",
        "layout": [
          {
            "i": "mts-income-taxes-current-vs-prior",
            "x": 0,
            "y": 2,
            "w": 40,
            "h": 15
          },
          {
            "i": "mts-income-taxes-monthly-by-year",
            "x": 0,
            "y": 17,
            "w": 40,
            "h": 15
          },
          {
            "i": "mts-income-taxes-yoy-comparison",
            "x": 0,
            "y": 32,
            "w": 40,
            "h": 15
          },
          {
            "i": "mts-income-taxes-fytd",
            "x": 0,
            "y": 47,
            "w": 40,
            "h": 15
          },
          {
            "i": "mts-income-taxes-monthly",
            "x": 0,
            "y": 62,
            "w": 40,
            "h": 15
          }
        ]
      },
      "fed-balance-sheet": {
        "id": "fed-balance-sheet",
        "name": "FED Balance Sheet",
        "layout": [
          {
            "i": "fed-balance-sheet",
            "x": 0,
            "y": 2,
            "w": 40,
            "h": 15
          },
          {
            "i": "fed-balance-sheet-weekly",
            "x": 0,
            "y": 17,
            "w": 40,
            "h": 19
          }
        ]
      }
    },
    "groups": [],
    "prompts": [
      "What is the current Fed Net Liquidity?",
      "Show me the weekly changes in the Fed's balance sheet.",
      "What are the year-over-year changes in MTS income taxes?",
      "Display the monthly income tax receipts for the current fiscal year.",
      "How has the Fed's balance sheet evolved over the last year?"
    ]
  }
]
```

</details>
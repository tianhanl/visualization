# Visualization

Components for easily creating visualizations for data.
Users can create different graph using just json/object.

Built on top of recharts.

[Live Demo](http://tianhang.me/visualization/)

## Format of graph configuration json

```json
[
  {
    "title": "Result",
    "data": [
      { "name": "Thersea May", "value": 0.424 },
      { "name": "Jeremy Corbyn", "value": 0.4 },
      { "name": "Nicola Sturgeon", "value": 0.003 },
      { "name": "Tim Farron", "value": 0.007 },
      { "name": "Arlene Foster", "value": 0.001 },
      { "name": "Gerry Adams", "value": 0.001 },
      { "name": "Leanne Wood", "value": 0.001 },
      { "name": "Jonathan Bartley Caroline Lucas", "value": 0.002 }
    ],
    "needController": false,
    "nameKey": "name",
    "valueKey": "value",
    // "valueKey": [
    //           "Con",
    //           "Lab",
    //           "Lib Dem",
    //           "SNP",
    //           "Plaid",
    //           "Green",
    //           "UKIP",
    //           "Others",
    //           "Lead"
    //         ],
    // "selectableKeys": [
    //   "Con",
    //   "Lab",
    //   "Lib Dem",
    //   "SNP",
    //   "Plaid",
    //   "Green",
    //   "UKIP",
    //   "Others",
    //   "Lead"
    // ],
    // "separationKeys": ["agency"],
    "graphType": "pie",
    "tabName": "Result"
  }
]
```

## Current Components

### GraphCreator

Component that translate input json/object to graphs.

#### Props

* `scenes`, a json string or a array of objects formatted as specified.
* `needTab`, a boolean that change whether users can view the graph in different tabs

### LineGraph

Basic component for line graph.

#### Props

* `displayData`, array of items you want to display
* `valueKey`, the keys of fields in each item you want to display (y value)
* `nameKey`, the key of field contating name (x value)
* `colors`, optional parameter for setting what colors the line will use

All basic component graph share same interface

### TabbedGraphContainer

Tabbed container for graphs, and users can click tab to change which graph to view.

#### Props

* `tabContentRenders`, renders for graphs
* `tabNames`, names of different graphs

### GraphController

Container that allows user to choose which key they want to display, and how are the data displayed.

#### Props

* `data`, original data you want display
* `separationKeys`, keys users can choose to seaprate the grahps
* `selectableKeys`, keys user can toggle to display/hide a specifc filed of in dat .
* `render`, render for controlled graph

# Visualization

Components for easily creating visualizations for data.
Users can create different graph using just json/object.

Built on top of recharts.

[Live Demo](http://tianhang.me/visualization/)

## Format of graph configuration object/json

```javascript
[
  {
    // Title of current scene
    title: 'Predictions',
    // Required to display the item in tabbed container
    tabName: 'Predictions'
    graphes: [
      {
        // the data you want to display
        data: arimaPrediction,
        // Do you want to allow users
        needController: false,
        // Which key should be used to extract name
        nameKey: 'candidate',
        // Which key should be used to extract value
        valueKey: 'prediction',
        // Which type of graph you want to create
        graphType: PIE,
        // The name of the graph
        graphName: 'ARIMA result'
      },
      {
        data: lstmPrediction,
        needController: false,
        nameKey: 'candidate',
        valueKey: 'prediction',
        graphType: PIE,
        graphName: 'LSTM Result'
      },
      {
        data: actulResults,
        needController: false,
        nameKey: 'name',
        valueKey: 'value',
        graphType: PIE,
        graphName: 'Actual Results'
      }
    ]
  },
  {
    title: 'Pollings',
    graphes: [
      {
        data: pollings,
        nameKey: 'date',
        // value key can also be an array
        valueKey: [
          'Theresa May',
          'Jeremy Corbyn',
          'Nicola Sturgeon',
          'Tim Farron',
          'Arlene Foster',
          'Gerry Adams',
          'Leanne Wood',
          'Jonathan Bartley Caroline Lucas',
          'John Bercow',
          'Sylvia Hermon'
        ],
        // The values you want to allow users to toggle
        selectableKeys: [
          'Theresa May',
          'Jeremy Corbyn',
          'Nicola Sturgeon',
          'Tim Farron',
          'Arlene Foster',
          'Gerry Adams',
          'Leanne Wood',
          'Jonathan Bartley Caroline Lucas',
          'John Bercow',
          'Sylvia Hermon'
        ],
        graphType: LINE,
        graphName: 'pollings',
        needController: true
      }
    ],
    tabName: 'Pollings'
  }
];
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

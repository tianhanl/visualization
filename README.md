# Visualization
Components for easily creating visualizations for data.
Built on top of recharts.

## Current Components

### LineGraph
Basic component for line graph.

#### Props
`data`, array of items you want to display
`lineKeys`, the keys of fields in each item you want to display
`colors`, optional parameter for setting what colors the line will use

### LineGraphContainers
Container for multiple line graphs.

#### Props
`dataList`, lists of data you want to display
`lineKey`, keys for fields in data you want to display

### GraphController
Container that allows user to choose which key they want to display, and how are the data displayed.

#### Props
`data`, original data you want display
`separationKeys`, keys users can choose to seaprate the grahps
`lineKeys`, keys user can toggle to display/hide a specifc filed of in dat .


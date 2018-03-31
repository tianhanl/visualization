import React from 'react';
import PropTypes from 'prop-types';
import AreaGraph from './AreaGraph';
import LineGraph from './LineGraph';
import PieGraph from './PieGraph';
import TabbedGraphContainer from './TabbedGraphContainer';
// graph types
const PIE = 'pie';
const LINE = 'line';
const AREA = 'area';


const defaultScenes = [
  {
    title: 'Default Graph',
    data: [
      {
        name: 'Thersea May',
        value: 0.424
      }, {
        name: 'Jeremy Corbyn',
        value: 0.400
      }, {
        name: 'Nicola Sturgeon',
        value: 0.003
      }, {
        name: 'Tim Farron',
        value: 0.007
      }, {
        name: 'Arlene Foster',
        value: 0.001
      }, {
        name: 'Gerry Adams',
        value: 0.001
      }, {
        name: 'Leanne Wood',
        value: 0.001
      }, {
        name: 'Jonathan Bartley Caroline Lucas',
        value: 0.002
      },
    ],
    nameKey: 'name',
    valueKey: 'value',
    graphType: PIE,
    tabName: 'Default'
  }
]


class GraphCreator extends React.Component {
  constructor(props) {
    super(props);
  }
  createScene = (scene) => {
    let render = null;
    switch (scene.graphType) {
      case PIE:
        render = () => (
          <PieGraph displayData={scene.data} nameKey={scene.nameKey} valueKey={scene.valueKey}/>
        );
        break;
      case AREA:
        render = () => (
          <AreaGraph displayData={scene.data} nameKey={scene.nameKey} valueKey={scene.valueKey}/>
        );
        break;
      case LINE:
        render = () => (
          <LineGraph displayData={scene.data} nameKey={scene.nameKey} valueKey={scene.valueKey} />
        )
        break;
      default:
        render = () => (<h3>A graph type must be specified</h3>)
    }
    return (
      <section key={scene.title}>
        <h2>{scene.title}</h2>
        {render()}
      </section>
    );
  }
  render() {
    return (
      <div>
        {
          this.props.needTab?
          <TabbedGraphContainer
            tabNames={
              this.props.scenes.map(scene=> scene['tabName'])
            }
            tabContentRenders={
              this.props.scenes.map(scene => (() => this.createScene(scene)))
            }/>:
            this.props.scenes.map(scene => this.createScene(scene))
        }
      </div>
    )
  }
}

GraphCreator.defaultProps = {
  scenes: defaultScenes,
  needTab: true
}

// GraphController.propTypes = {
//   separationKeys: PropTypes.array,
//   data: PropTypes.array,
//   lineKeys: PropTypes.array
// }


export default GraphCreator;
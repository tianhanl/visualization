import React from 'react';
import PropTypes from 'prop-types';
import AreaGraph from './AreaGraph';
import LineGraph from './LineGraph';
import PieGraph from './PieGraph';
import TabbedGraphContainer from './TabbedGraphContainer';
import GraphController from './GraphController';
// graph types
const PIE = 'pie';
const LINE = 'line';
const AREA = 'area';

const defaultScenes = [
  {
    title: 'Result',
    data: [
      {
        name: 'Thersea May',
        value: 0.424
      },
      {
        name: 'Jeremy Corbyn',
        value: 0.4
      },
      {
        name: 'Nicola Sturgeon',
        value: 0.003
      },
      {
        name: 'Tim Farron',
        value: 0.007
      },
      {
        name: 'Arlene Foster',
        value: 0.001
      },
      {
        name: 'Gerry Adams',
        value: 0.001
      },
      {
        name: 'Leanne Wood',
        value: 0.001
      },
      {
        name: 'Jonathan Bartley Caroline Lucas',
        value: 0.002
      }
    ],
    needController: false,
    nameKey: 'name',
    valueKey: 'value',
    graphType: PIE,
    tabName: 'Result'
  }
];

class GraphCreator extends React.Component {
  constructor(props) {
    super(props);
  }
  createScene = scene => {
    let render = null;
    switch (scene.graphType) {
      case PIE:
        render = (tabName, data, nameKey, valueKey) => (
          <PieGraph
            key={tabName}
            displayData={data}
            nameKey={nameKey}
            valueKey={valueKey}
          />
        );
        break;
      case AREA:
        render = (tabName, data, nameKey, valueKey) => (
          <AreaGraph
            key={tabName}
            displayData={data}
            nameKey={nameKey}
            valueKey={valueKey}
          />
        );
        break;
      case LINE:
        render = (tabName, data, nameKey, valueKey) => (
          <LineGraph
            key={tabName}
            displayData={data}
            nameKey={nameKey}
            valueKey={valueKey}
          />
        );
        break;
      default:
        render = () => <h3>A graph type must be specified</h3>;
    }
    if (scene.needController) {
      return (
        <section key={scene.title}>
          <GraphController
            data={scene.data}
            selectableKeys={scene.valueKey}
            separationKeys={scene.separationKeys}
            render={(dataList, activeKeys) => (
              <div>
                {dataList.map(element => (
                  <div key={element.name}>
                    <h3>{element.name}</h3>
                    {render(
                      scene.tabName,
                      element.data,
                      scene.nameKey,
                      activeKeys
                    )}
                  </div>
                ))}
              </div>
            )}
          />
        </section>
      );
    } else {
      return (
        <section key={scene.title}>
          <h2>{scene.title}</h2>
          {render(scene.tabName, scene.data, scene.nameKey, scene.valueKey)}
        </section>
      );
    }
  };

  get parsedScenes() {
    return Array.isArray(this.props.scenes)
      ? this.props.scenes
      : JSON.parse(this.props.scenes);
  }

  render() {
    return (
      <div>
        {this.props.needTab ? (
          <TabbedGraphContainer
            tabNames={this.parsedScenes.map(scene => scene['tabName'])}
            tabContentRenders={this.parsedScenes.map(scene => () =>
              this.createScene(scene)
            )}
          />
        ) : (
          this.parsedScenes.map(scene => this.createScene(scene))
        )}
      </div>
    );
  }
}

GraphCreator.defaultProps = {
  scenes: defaultScenes,
  needTab: true
};

GraphCreator.propTypes = {
  scenes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  needTab: PropTypes.bool
};

export default GraphCreator;

import React from 'react';
import PropTypes from 'prop-types';
import AreaGraph from './AreaGraph';
import LineGraph from './LineGraph';
import PieGraph from './PieGraph';
import TabbedGraphContainer from './TabbedGraphContainer';
import GraphController from './GraphController';
import './GraphCreator.css';
// graph types
const PIE = 'pie';
const LINE = 'line';
const AREA = 'area';

const graphConstructors = {
  pie: PieGraph,
  line: LineGraph,
  area: AreaGraph
};

const defaultScenes = [
  {
    title: 'Result',
    graphes: [
      {
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
        graphName: 'actual result'
      }
    ],
    tabName: 'Result'
  }
];

class GraphCreator extends React.Component {
  constructor(props) {
    super(props);
  }
  createScene = scene => {
    let render = null;
    if (scene.graphes) {
      let graphes = scene.graphes.map(graph => {
        if (graph.graphType) {
          let CurrentGraph = graphConstructors[graph.graphType];
          if (graph.needController) {
            return (
              <GraphController
                key={graph.graphName}
                data={graph.data}
                selectableKeys={graph.selectableKeys}
                valueKeys={graph.valueKey}
                separationKeys={graph.separationKeys}
                render={(dataList, activeKeys) => (
                  <section>
                    <h4>{graph.graphName}</h4>
                    {dataList.map(element => (
                      <div key={element.name}>
                        <h3>{element.name}</h3>
                        {
                          <CurrentGraph
                            key={graph.graphName}
                            displayData={element.data}
                            nameKey={graph.nameKey}
                            valueKey={activeKeys}
                          />
                        }
                      </div>
                    ))}
                  </section>
                )}
              />
            );
          } else {
            return (
              <section className={'graph-container'} key={graph.graphName}>
                <h4>{graph.graphName}</h4>
                <CurrentGraph
                  displayData={graph.data}
                  nameKey={graph.nameKey}
                  valueKey={graph.valueKey}
                />
              </section>
            );
          }
        } else {
          return <h3>A graph type must be specified</h3>;
        }
      });
      return (
        <section key={scene.title}>
          <h2>{scene.title}</h2>
          <div className={'tab-container'}>{graphes}</div>
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
            tabNames={this.parsedScenes.map(
              (scene, index) =>
                scene['tabName'] ? scene['tabName'] : `graph-${index}`
            )}
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

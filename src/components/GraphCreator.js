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
  },
  {
    title: 'Polling',
    data: [
      {
        date: '2017-07-18',
        agency: 'YouGov/The Times',
        Con: 0.41,
        Lab: 0.43,
        'Lib Dem': 0.06,
        SNP: 0.04,
        Plaid: 0.03,
        Green: 0,
        UKIP: 0.02,
        Others: 0.02,
        Lead: 0
      },
      {
        date: '2017-07-31',
        agency: 'YouGov/The Times',
        Con: 0.41,
        Lab: 0.44,
        'Lib Dem': 0.07,
        SNP: 0.03,
        Plaid: 0.03,
        Green: 0.01,
        UKIP: 0.02,
        Others: 0.03,
        Lead: 0
      },
      {
        date: '2017-08-07',
        agency: 'BMG/The Independent',
        Con: 0.42,
        Lab: 0.39,
        'Lib Dem': 0.07,
        SNP: 0.02,
        Plaid: 0,
        Green: 0.03,
        UKIP: 0,
        Others: 0,
        Lead: 0.03
      },
      {
        date: '2017-08-15',
        agency: 'Opinium/Observer',
        Con: 0.4,
        Lab: 0.43,
        'Lib Dem': 0.06,
        SNP: 0.04,
        Plaid: 0.01,
        Green: 0.02,
        UKIP: 0.04,
        Others: 0,
        Lead: 0.03
      },
      {
        date: '2017-08-21',
        agency: 'YouGov/The Times',
        Con: 0.41,
        Lab: 0.42,
        'Lib Dem': 0.08,
        SNP: 0.04,
        Plaid: 0.04,
        Green: 0,
        UKIP: 0.01,
        Others: 0.01,
        Lead: 0
      },
      {
        date: '2017-08-25',
        agency: 'ICM Research/The Guardian',
        Con: 0.42,
        Lab: 0.42,
        'Lib Dem': 0.07,
        SNP: 0.02,
        Plaid: 0,
        Green: 0.03,
        UKIP: 0.03,
        Others: 0,
        Lead: 0
      },
      {
        date: '2017-08-30',
        agency: 'YouGov/The Times',
        Con: 0.41,
        Lab: 0.42,
        'Lib Dem': 0.06,
        SNP: 0.04,
        Plaid: 0.04,
        Green: 0,
        UKIP: 0.02,
        Others: 0.01,
        Lead: 0
      },
      {
        date: '2017-08-31',
        agency: 'Survation/The Mail on Sunday',
        Con: 0.39,
        Lab: 0.43,
        'Lib Dem': 0.07,
        SNP: 0.03,
        Plaid: 0.01,
        Green: 0,
        UKIP: 0.04,
        Others: 0.03,
        Lead: 0.04
      },
      {
        date: '2017-09-08',
        agency: 'ICM Research/The Guardian',
        Con: 0.42,
        Lab: 0.42,
        'Lib Dem': 0.07,
        SNP: 0.03,
        Plaid: 0.03,
        Green: 0,
        UKIP: 0.03,
        Others: 0,
        Lead: 0
      },
      {
        date: '2017-09-12',
        agency: 'Opinium',
        Con: 0.41,
        Lab: 0.41,
        'Lib Dem': 0.05,
        SNP: 0.04,
        Plaid: 0.01,
        Green: 0.03,
        UKIP: 0.05,
        Others: 0,
        Lead: 0
      },
      {
        date: '2017-09-12',
        agency: 'BMG/The Independent',
        Con: 0.39,
        Lab: 0.38,
        'Lib Dem': 0.08,
        SNP: 0.03,
        Plaid: 0,
        Green: 0.04,
        UKIP: 0.06,
        Others: 0.01,
        Lead: 0.01
      },
      {
        date: '2017-09-12',
        agency: 'YouGov/The Times',
        Con: 0.41,
        Lab: 0.42,
        'Lib Dem': 0.07,
        SNP: 0.04,
        Plaid: 0.03,
        Green: 0.01,
        UKIP: 0.02,
        Others: 0.01,
        Lead: 0
      },
      {
        date: '2017-09-15',
        agency: 'Survation/LabourList',
        Con: 0.4,
        Lab: 0.41,
        'Lib Dem': 0.07,
        SNP: 0.03,
        Plaid: 0.01,
        Green: 0.02,
        UKIP: 0.03,
        Others: 0.01,
        Lead: 0.01
      },
      {
        date: '2017-09-15',
        agency: 'Ipsos MORI',
        Con: 0.4,
        Lab: 0.44,
        'Lib Dem': 0.09,
        SNP: 0.04,
        Plaid: 0,
        Green: 0.01,
        UKIP: 0.02,
        Others: 0,
        Lead: 0.04
      },
      {
        date: '2017-09-19',
        agency: 'Opinium',
        Con: 0.42,
        Lab: 0.4,
        'Lib Dem': 0.06,
        SNP: 0.04,
        Plaid: 0.01,
        Green: 0.02,
        UKIP: 0.04,
        Others: 0.01,
        Lead: 0.02
      },
      {
        date: '2017-09-22',
        agency: 'YouGov/The Times',
        Con: 0.39,
        Lab: 0.43,
        'Lib Dem': 0.07,
        SNP: 0.04,
        Plaid: 0.04,
        Green: 0,
        UKIP: 0.02,
        Others: 0.04,
        Lead: 0
      },
      {
        date: '2017-09-22',
        agency: 'ICM Research/The Guardian',
        Con: 0.4,
        Lab: 0.42,
        'Lib Dem': 0.08,
        SNP: 0.03,
        Plaid: 0.01,
        Green: 0.02,
        UKIP: 0.04,
        Others: 0,
        Lead: 0.02
      },
      {
        date: '2017-09-22',
        agency: 'Survation/Mail on Sunday',
        Con: 0.38,
        Lab: 0.43,
        'Lib Dem': 0.08,
        SNP: 0.04,
        Plaid: 0.01,
        Green: 0.02,
        UKIP: 0.04,
        Others: 0.01,
        Lead: 0.05
      },
      {
        date: '2017-09-26',
        agency: 'BMG/The Independent',
        Con: 0.37,
        Lab: 0.42,
        'Lib Dem': 0.1,
        SNP: 0.03,
        Plaid: 0,
        Green: 0.03,
        UKIP: 0.04,
        Others: 0.01,
        Lead: 0.05
      },
      {
        date: '2017-10-04',
        agency: 'Opinium/The Observer',
        Con: 0.4,
        Lab: 0.42,
        'Lib Dem': 0.05,
        SNP: 0.04,
        Plaid: 0,
        Green: 0.02,
        UKIP: 0.05,
        Others: 0.01,
        Lead: 0.02
      },
      {
        date: '2017-10-04',
        agency: 'Survation',
        Con: 0.38,
        Lab: 0.44,
        'Lib Dem': 0.07,
        SNP: 0.03,
        Plaid: 0.01,
        Green: 0.01,
        UKIP: 0.04,
        Others: 0.09,
        Lead: 0.06
      },
      {
        date: '2017-10-04',
        agency: 'YouGov/The Times',
        Con: 0.4,
        Lab: 0.42,
        'Lib Dem': 0.07,
        SNP: 0.04,
        Plaid: 0.04,
        Green: 0.01,
        UKIP: 0.02,
        Others: 0.02,
        Lead: 0
      },
      {
        date: '2017-10-06',
        agency: 'ICM Research/The Guardian',
        Con: 0.41,
        Lab: 0.41,
        'Lib Dem': 0.07,
        SNP: 0.04,
        Plaid: 0.01,
        Green: 0.02,
        UKIP: 0.04,
        Others: 0,
        Lead: 0
      },
      {
        date: '2017-10-10',
        agency: 'YouGov/The Times',
        Con: 0.39,
        Lab: 0.42,
        'Lib Dem': 0.08,
        SNP: 0.04,
        Plaid: 0.04,
        Green: 0,
        UKIP: 0.02,
        Others: 0.03,
        Lead: 0
      },
      {
        date: '2017-10-18',
        agency: 'YouGov/The Times',
        Con: 0.4,
        Lab: 0.42,
        'Lib Dem': 0.08,
        SNP: 0.04,
        Plaid: 0.04,
        Green: 0.01,
        UKIP: 0.02,
        Others: 0.02,
        Lead: 0
      },
      {
        date: '2017-10-20',
        agency: 'ICM Research/The Guardian',
        Con: 0.42,
        Lab: 0.42,
        'Lib Dem': 0.07,
        SNP: 0.03,
        Plaid: 0,
        Green: 0.02,
        UKIP: 0.03,
        Others: 0,
        Lead: 0
      },
      {
        date: '2017-10-23',
        agency: 'YouGov/The Times',
        Con: 0.41,
        Lab: 0.43,
        'Lib Dem': 0.07,
        SNP: 0.04,
        Plaid: 0.03,
        Green: 0,
        UKIP: 0.02,
        Others: 0.02,
        Lead: 0
      },
      {
        date: '2017-10-27',
        agency: 'Ipsos MORI',
        Con: 0.38,
        Lab: 0.4,
        'Lib Dem': 0.09,
        SNP: 0.05,
        Plaid: 0.04,
        Green: 0,
        UKIP: 0.03,
        Others: 0.02,
        Lead: 0
      },
      {
        date: '2017-11-07',
        agency: 'YouGov/The Times',
        Con: 0.4,
        Lab: 0.43,
        'Lib Dem': 0.06,
        SNP: 0.04,
        Plaid: 0.04,
        Green: 0.01,
        UKIP: 0.02,
        Others: 0.03,
        Lead: 0
      },
      {
        date: '2017-11-10',
        agency: 'ICM Research/The Guardian',
        Con: 0.41,
        Lab: 0.41,
        'Lib Dem': 0.07,
        SNP: 0.04,
        Plaid: 0,
        Green: 0.02,
        UKIP: 0.04,
        Others: 0.01,
        Lead: 0
      },
      {
        date: '2017-11-14',
        agency: 'Kantar Public',
        Con: 0.42,
        Lab: 0.38,
        'Lib Dem': 0.09,
        SNP: 0.02,
        Plaid: 0,
        Green: 0.03,
        UKIP: 0.05,
        Others: 0.02,
        Lead: 0.04
      },
      {
        date: '2017-11-14',
        agency: 'Opinium/Observer',
        Con: 0.4,
        Lab: 0.42,
        'Lib Dem': 0.06,
        SNP: 0.04,
        Plaid: 0.01,
        Green: 0.02,
        UKIP: 0.05,
        Others: 0,
        Lead: 0.02
      },
      {
        date: '2017-11-19',
        agency: 'YouGov/The Times',
        Con: 0.4,
        Lab: 0.43,
        'Lib Dem': 0.07,
        SNP: 0.04,
        Plaid: 0.03,
        Green: 0,
        UKIP: 0.02,
        Others: 0.03,
        Lead: 0
      },
      {
        date: '2017-11-22',
        agency: 'YouGov/The Times',
        Con: 0.39,
        Lab: 0.41,
        'Lib Dem': 0.07,
        SNP: 0.04,
        Plaid: 0.04,
        Green: 0.01,
        UKIP: 0.03,
        Others: 0.02,
        Lead: 0
      },
      {
        date: '2017-11-24',
        agency: 'Ipsos MORI',
        Con: 0.37,
        Lab: 0.39,
        'Lib Dem': 0.09,
        SNP: 0.05,
        Plaid: 0.04,
        Green: 0.01,
        UKIP: 0.04,
        Others: 0.02,
        Lead: 0
      },
      {
        date: '2017-11-24',
        agency: 'ICM Research/The Guardian',
        Con: 0.41,
        Lab: 0.41,
        'Lib Dem': 0.07,
        SNP: 0.03,
        Plaid: 0,
        Green: 0.03,
        UKIP: 0.05,
        Others: 0,
        Lead: 0
      },
      {
        date: '2017-11-29',
        agency: 'ICM Research/Sun on Sunday',
        Con: 0.4,
        Lab: 0.41,
        'Lib Dem': 0.08,
        SNP: 0.03,
        Plaid: 0,
        Green: 0.03,
        UKIP: 0.04,
        Others: 0,
        Lead: 0.01
      },
      {
        date: '2017-11-30',
        agency: 'Survation/Mail on Sunday',
        Con: 0.38,
        Lab: 0.46,
        'Lib Dem': 0.06,
        SNP: 0.03,
        Plaid: 0,
        Green: 0.01,
        UKIP: 0.04,
        Others: 0.01,
        Lead: 0.08
      },
      {
        date: '2017-12-04',
        agency: 'YouGov/The Times',
        Con: 0.4,
        Lab: 0.41,
        'Lib Dem': 0.07,
        SNP: 0.04,
        Plaid: 0.03,
        Green: 0.01,
        UKIP: 0.02,
        Others: 0.01,
        Lead: 0
      },
      {
        date: '2017-12-05',
        agency: 'BMG Research/Independent',
        Con: 0.37,
        Lab: 0.4,
        'Lib Dem': 0.09,
        SNP: 0.03,
        Plaid: 0.01,
        Green: 0.03,
        UKIP: 0.05,
        Others: 0.01,
        Lead: 0.03
      },
      {
        date: '2017-12-08',
        agency: 'ICM Research/The Guardian',
        Con: 0.42,
        Lab: 0.4,
        'Lib Dem': 0.08,
        SNP: 0.03,
        Plaid: 0.01,
        Green: 0.02,
        UKIP: 0.05,
        Others: 0,
        Lead: 0.02
      },
      {
        date: '2017-12-09',
        agency: 'YouGov/The Times',
        Con: 0.42,
        Lab: 0.41,
        'Lib Dem': 0.07,
        SNP: 0.04,
        Plaid: 0.04,
        Green: 0.02,
        UKIP: 0.02,
        Others: 0.01,
        Lead: 0
      },
      {
        date: '2017-12-12',
        agency: 'ICM Research/Sun on Sunday',
        Con: 0.41,
        Lab: 0.42,
        'Lib Dem': 0.07,
        SNP: 0.03,
        Plaid: 0,
        Green: 0.03,
        UKIP: 0.04,
        Others: 0,
        Lead: 0.01
      },
      {
        date: '2017-12-12',
        agency: 'Opinium/Observer',
        Con: 0.39,
        Lab: 0.41,
        'Lib Dem': 0.07,
        SNP: 0.03,
        Plaid: 0.01,
        Green: 0.02,
        UKIP: 0.06,
        Others: 0.01,
        Lead: 0.02
      },
      {
        date: '2017-12-19',
        agency: 'YouGov/The Times',
        Con: 0.4,
        Lab: 0.42,
        'Lib Dem': 0.07,
        SNP: 0.05,
        Plaid: 0.04,
        Green: 0,
        UKIP: 0.01,
        Others: 0.02,
        Lead: 0
      }
    ],
    nameKey: 'date',
    valueKey: [
      'Con',
      'Lab',
      'Lib Dem',
      'SNP',
      'Plaid',
      'Green',
      'UKIP',
      'Others',
      'Lead'
    ],
    selectableKeys: [
      'Con',
      'Lab',
      'Lib Dem',
      'SNP',
      'Plaid',
      'Green',
      'UKIP',
      'Others',
      'Lead'
    ],
    separationKeys: ['agency'],
    graphType: LINE,
    tabName: 'Polling',
    needController: true
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
  render() {
    return (
      <div>
        {this.props.needTab ? (
          <TabbedGraphContainer
            tabNames={this.props.scenes.map(scene => scene['tabName'])}
            tabContentRenders={this.props.scenes.map(scene => () =>
              this.createScene(scene)
            )}
          />
        ) : (
          this.props.scenes.map(scene => this.createScene(scene))
        )}
      </div>
    );
  }
}

GraphCreator.defaultProps = {
  scenes: defaultScenes,
  needTab: true
};

// GraphController.propTypes = {
//   separationKeys: PropTypes.array,
//   data: PropTypes.array,
//   lineKeys: PropTypes.array
// }

export default GraphCreator;

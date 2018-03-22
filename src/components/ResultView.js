import React from 'react';
import PieGraph from './PieGraph';
import PropTypes from 'prop-types';

const data = [ { candidate: 'Theresa May',
'twitter pro': '0.63',
'twitter con': '0.62',
'user pro': '0.51',
'user con': '0.5675',
prediction: '0.327788367122971' },
{ candidate: 'Jeremy Corbyn',
'twitter pro': '0.01',
'twitter con': '0.53',
'user pro': '0.32',
'user con': '0.3',
prediction: '0.173280194073817' },
{ candidate: 'Nicola Sturgeon',
'twitter pro': '0.66',
'twitter con': '0.599',
'user pro': '0.05',
'user con': '0.2818',
prediction: '0.162767862300006' },
{ candidate: 'Tim Farron',
'twitter pro': '0.14',
'twitter con': '0.56',
'user pro': '0.09',
'user con': '0.194',
prediction: '0.112054525501069' },
{ candidate: 'Arlene Foster',
'twitter pro': '0.63',
'twitter con': '0.79',
'user pro': '0',
'user con': '0.284',
prediction: '0.164038583723214' },
{ candidate: 'Gerry Adams',
'twitter pro': '0.27',
'twitter con': '0.22',
'user pro': '0',
'user con': '0.098',
prediction: '0.056604863397447' },
{ candidate: 'Leanne Wood',
'twitter pro': '0',
'twitter con': '0',
'user pro': '0',
'user con': '0',
prediction: '0' },
{ candidate: 'Jonathan Bartley Caroline Lucas',
'twitter pro': '0',
'twitter con': '0',
'user pro': '0.01',
'user con': '0.006',
prediction: '0.00346560388147635' },
{ candidate: 'John Bercow',
'twitter pro': '0',
'twitter con': '0',
'user pro': '0',
'user con': '0',
prediction: '0' },
{ candidate: 'Sylvia Hermon ',
'twitter pro': '0',
'twitter con': '0',
'user pro': '0',
'user con': '0',
prediction: '0' }]


const valueKeys = [
    "twitter pro",
    "twitter con",
    "user pro",
    "user con",
    "prediction"
];

const nameKey = 'candidate';

const dataList = valueKeys.map(key => {
    return data.map(element => ({
        name: element[nameKey],
        value: Math.round(Number.parseFloat(element[key]) * 1000)/1000
    })).filter(element => element['value']);
});

const actualResult = [
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
  }
]




const ResultView = () => (
  <div style={{
      padding: '1em'
    }}>
    <section>
      <h3>
        {'Prediction'}
      </h3>
      <PieGraph
        key={'prediction'}
        displayData={dataList[dataList.length-1]}
        nameKey={'name'}
        valueKey={'value'}>
      </PieGraph>
    </section>
    format
    <section>
      <h3>
        {'Actual Result'}
      </h3>
      <PieGraph
        key={'actual result'}
        displayData={actualResult}
        nameKey={'name'}
        valueKey={'value'}>
      </PieGraph>
    </section>
  </div>
);

ResultView.propTypes = {
    dataList: PropTypes.array,
    lineKeys: PropTypes.array
}

export default ResultView;

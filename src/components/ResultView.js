import React from 'react';
import PieGraph from './PieGraph';
import PropTypes from 'prop-types';

const data = [
    {
        "candidate": "Theresa May",
        "twitter pro": "0.63",
        "twitter con": "0.62",
        "user pro": "0.51",
        "user con": "0.5675",
        "prediction": "0.327788367122971"
    },
    {
        "candidate": "Jeremy Corbyn",
        "twitter pro": "0.01",
        "twitter con": "0.53",
        "user pro": "0.32",
        "user con": "0.3",
        "prediction": "0.173280194073817"
    },
    {
        "candidate": "Nicola Sturgeon",
        "twitter pro": "0.66",
        "twitter con": "0.599",
        "user pro": "0.05",
        "user con": "0.2818",
        "prediction": "0.162767862300006"
    },
    {
        "candidate": "Tim Farron",
        "twitter pro": "0.14",
        "twitter con": "0.56",
        "user pro": "0.09",
        "user con": "0.194",
        "prediction": "0.112054525501069"
    },
    {
        "candidate": "Arlene Foster",
        "twitter pro": "0.63",
        "twitter con": "0.79",
        "user pro": "0",
        "user con": "0.284",
        "prediction": "0.164038583723214"
    },
    {
        "candidate": "Gerry Adams",
        "twitter pro": "0.27",
        "twitter con": "0.22",
        "user pro": "0",
        "user con": "0.098",
        "prediction": "0.056604863397447"
    },
    {
        "candidate": "Leanne Wood",
        "twitter pro": "0",
        "twitter con": "0",
        "user pro": "0",
        "user con": "0",
        "prediction": "0"
    },
    {
        "candidate": "Jonathan Bartley Caroline Lucas",
        "twitter pro": "0",
        "twitter con": "0",
        "user pro": "0.01",
        "user con": "0.006",
        "prediction": "0.00346560388147635"
    },
    {
        "candidate": "John Bercow",
        "twitter pro": "0",
        "twitter con": "0",
        "user pro": "0",
        "user con": "0",
        "prediction": "0"
    },
    {
        "candidate": "Sylvia Hermon ",
        "twitter pro": "0",
        "twitter con": "0",
        "user pro": "0",
        "user con": "0",
        "prediction": "0"
    }
];

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
        value: element[key]
    }));
});

console.log(dataList);

// {/* {
//             dataList.map((element, index) => (<PieGraph key={valueKeys[index]} data={element}></PieGraph>))
//         } */
// }



const ResultView = () => (
    <div style={{
        minHeight: '100vh'
    }}>
        <PieGraph displayData={data} valueKey={'prediction'}/>

    </div>
);

ResultView.propTypes = {
    dataList: PropTypes.array,
    lineKeys: PropTypes.array
}

export default ResultView;
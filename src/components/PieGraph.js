import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  LabelList
} from 'recharts';
import PropTypes from 'prop-types';
const defaultColors = [
  '#B0F566',
  '#4AF2A1',
  '#5CC9F5',
  '#6638F0',
  '#F78AE0',
  '#FFBF45',
  '#515151'
];

const PieGraph = ({
  displayData,
  valueKey,
  nameKey,
  colors = defaultColors,
  width = '90%',
  height = 400
}) => (
  <ResponsiveContainer width={width} height={height}>
    <PieChart>
      <Pie
        nameKey={nameKey}
        dataKey={valueKey}
        isAnimationActive={false}
        data={displayData}
        outerRadius={'60%'}
        label={false}
      >
        {displayData.map((entry, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
        <LabelList
          stroke={''}
          offset={10}
          dataKey={nameKey}
          position={'outside'}
        />
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  </ResponsiveContainer>
);

PieGraph.propTypes = {
  displayData: PropTypes.array,
  valueKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  nameKey: PropTypes.string,
  colors: PropTypes.array,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number
};

export default PieGraph;

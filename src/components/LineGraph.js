import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import './LineGraph.css';
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

const LineGraph = ({
  displayData,
  valueKey,
  nameKey,
  colors = defaultColors
}) => (
  <ResponsiveContainer width={'90%'} height={400}>
    <LineChart
      data={displayData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <XAxis dataKey={nameKey} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      {Array.isArray(valueKey) ? (
        valueKey.map((key, index) => (
          <Line
            type="monotone"
            key={key}
            dataKey={key}
            stroke={colors[index % colors.length]}
          />
        ))
      ) : (
        <Line
          type="monotone"
          key={valueKey}
          dataKey={valueKey}
          stroke={colors[0]}
        />
      )}
    </LineChart>
  </ResponsiveContainer>
);

LineGraph.propTypes = {
  displayData: PropTypes.array,
  lineKeys: PropTypes.array,
  colors: PropTypes.array
};

export default LineGraph;

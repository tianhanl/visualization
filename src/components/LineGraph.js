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
  colors = defaultColors,
  width = '90%',
  height = 400
}) => (
  <ResponsiveContainer width={width} height={height}>
    <LineChart
      data={displayData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
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
            dot={!(displayData.length > 100)}
            stroke={colors[index % colors.length]}
          />
        ))
      ) : (
        <Line
          type="monotone"
          key={valueKey}
          dataKey={valueKey}
          stroke={colors[0]}
          dot={!(displayData.length > 100)}
        />
      )}
    </LineChart>
  </ResponsiveContainer>
);

LineGraph.propTypes = {
  displayData: PropTypes.array,
  valueKey: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  nameKey: PropTypes.string,
  colors: PropTypes.array,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number
};

export default LineGraph;

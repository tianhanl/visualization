import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line
} from 'recharts';
const defaultColors = [
  '#B0F566',
  '#4AF2A1',
  '#5CC9F5',
  '#6638F0',
  '#F78AE0',
  '#FFBF45',
  '#515151'
];
const AreaGraph = ({
  displayData,
  valueKey,
  nameKey,
  regressionKey,
  colors = defaultColors
}) => (
  <ResponsiveContainer with={'90%'} height={400}>
    <ComposedChart data={displayData}>
      <XAxis dataKey={nameKey} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey={valueKey}
        stroke={colors[0]}
        fill={colors[0]}
      />
      {regressionKey ? (
        <Line type="monotone" dataKey={regressionKey} stroke={colors[1]} />
      ) : (
        ''
      )}
    </ComposedChart>
  </ResponsiveContainer>
);

export default AreaGraph;

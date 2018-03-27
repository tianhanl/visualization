import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
}
from 'recharts';
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
  colors = defaultColors
}) => (<ResponsiveContainer with={'90%'} height={400}>
  <AreaChart data={displayData}>
    <XAxis dataKey={nameKey}/>
    <YAxis/>
    <CartesianGrid strokeDasharray="3 3"/>
    <Tooltip/>
    <Area type='monotone' dataKey={valueKey} stroke='#8884d8' fill='#8884d8'/>
  </AreaChart>
</ResponsiveContainer>);

export default AreaGraph;
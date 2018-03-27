import React from 'react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell
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
const PieGraph = ({
  displayData,
  valueKey,
  nameKey,
  colors = defaultColors
}) => (<ResponsiveContainer with={'90%'} height={400}>
  <PieChart width={800} height={400}>
    <Pie nameKey={nameKey} dataKey={valueKey} isAnimationActive={false} data={displayData} cx={'50%'} cy={'50%'} outerRadius={80} fill="#8884d8" label="label">
      {displayData.map((entry, index) => <Cell fill={colors[index % colors.length]}/>)}
    </Pie>
    <Tooltip/>
    <Legend></Legend>
  </PieChart>
</ResponsiveContainer>);

export default PieGraph;
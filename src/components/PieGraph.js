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
}) => (
  <ResponsiveContainer with={'90%'} height={400}>
    <PieChart width={800} height={400}>
      <Pie
        nameKey={nameKey}
        dataKey={valueKey}
        isAnimationActive={false}
        data={displayData}
        cx={'50%'}
        cy={'50%'}
        outerRadius={80}
        fill="#8884d8"
        label={false}>
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

export default PieGraph;

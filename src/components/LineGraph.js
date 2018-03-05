import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const defaultColors = ['#B0F566', '#4AF2A1', '#5CC9F5', '#6638F0', '#F78AE0'];

const LineGraph = ({data, lineKeys, colors=defaultColors}) => (
    <LineChart width={900} height={400} data={data}
               margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="date"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        {
            lineKeys.map((key, index)=> <Line key={key} dataKey={key} stroke={colors[index%colors.length]} />)
        }
    </LineChart>
);

export default LineGraph;
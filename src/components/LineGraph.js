import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import './LineGraph.css';
import PropTypes from 'prop-types';

const defaultColors = ['#B0F566', '#4AF2A1', '#5CC9F5', '#6638F0', '#F78AE0'];

const LineGraph = ({ data, lineKeys, colors = defaultColors }) => (
    <ResponsiveContainer width={'90%'} height={400}>
        <LineChart data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            {
                lineKeys.map((key, index) => <Line key={key} dataKey={key} stroke={colors[index % colors.length]} />)
            }
        </LineChart>
    </ResponsiveContainer>
);

LineGraph.propTypes = {
    data: PropTypes.array,
    lineKeys: PropTypes.array,
    colors: PropTypes.array
}



export default LineGraph;
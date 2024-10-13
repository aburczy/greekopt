import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Day 1", delta: 0.2, gamma: 0.3, theta: 0.1 },
  { name: "Day 2", delta: 0.5, gamma: 0.4, theta: 0.2 },
  { name: "Day 3", delta: 0.1, gamma: 0.5, theta: 0.3 },
  { name: "Day 4", delta: 0.6, gamma: 0.3, theta: 0.4 },
  { name: "Day 5", delta: 0.3, gamma: 0.2, theta: 0.5 },
];

function App() {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="delta" stroke="#8884d8" />
          <Line type="monotone" dataKey="gamma" stroke="#82ca9d" />
          <Line type="monotone" dataKey="theta" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;

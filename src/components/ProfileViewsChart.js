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

const ProfileViewsChart = () => {
  // Sample data for profile views over time (e.g., views per day)
  const data = [
    { date: "2024-09-01", views: 400 },
    { date: "2024-09-02", views: 600 },
    { date: "2024-09-03", views: 450 },
    { date: "2024-09-04", views: 700 },
    { date: "2024-09-05", views: 550 },
    { date: "2024-09-06", views: 800 },
    { date: "2024-09-07", views: 900 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="views"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProfileViewsChart;

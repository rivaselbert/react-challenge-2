import React from "react";
import "../styles/StatsGraph.css";
import ProfileViewsChart from "./ProfileViewsChart";

const StatsGraph = () => {
  return (
    <div className="stats-graph">
      <div className="stats-graph__header">
        <h3>Statistics Graph</h3>
      </div>
      <div className="stats-graph__item">
        <ProfileViewsChart />
      </div>
    </div>
  );
};

export default StatsGraph;

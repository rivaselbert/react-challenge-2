import React from "react";
import "../styles/Content.css";
import StatsGraph from "./StatsGraph";
import ActivityLog from "./ActivityLog";

const Content = () => {
  return (
    <div className="content">
      <StatsGraph />
      <ActivityLog />
    </div>
  );
};

export default Content;

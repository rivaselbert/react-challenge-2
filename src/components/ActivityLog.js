import React from "react";
import "../styles/ActivityLog.css";

const activities = [
  {
    timestamp: "Jun 12, 2024 5:00 PM",
    activityName: "Password Changed",
  },
  {
    timestamp: "Jun 12, 2024 6:00 PM",
    activityName: "Profile Updated",
  },
  {
    timestamp: "Jun 12, 2024 7:00 PM",
    activityName: "Email Verified",
  },
  {
    timestamp: "Jun 12, 2024 8:00 PM",
    activityName: "Logged Out",
  },
];

const ActivityLog = () => {
  return (
    <div className="activity-log">
      <div className="activity-log__header">
        <h3>Recent Activities</h3>
      </div>
      <div className="activity-log__item">
        <table>
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => {
              return (
                <tr>
                  <td>{activity.timestamp}</td>
                  <td>{activity.activityName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLog;

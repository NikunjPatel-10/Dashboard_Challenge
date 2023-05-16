import React from "react";
import CardHeader from "./UI/CardHeader";

const Health = () => {
  return (
    <div>
      <div>
        <CardHeader title={"Health"} />
      </div>
      <div className="p-3">
        <table className="table w-100">
          <tbody>
            <tr className="table-row">
              <td className="statistics">Time</td>
              <td className="task-status">14% ahead of schedule</td>
            </tr>
            <tr className="table-row">
              <td className="statistics">Tasks</td>
              <td className="task-status">12 Task to be completed</td>
            </tr>
            <tr className="table-row">
              <td className="statistics">Workload</td>
              <td className="task-status">0 task overdue</td>
            </tr>
            <tr className="table-row">
              <td className="statistics">Progress</td>
              <td className="task-status">14% completed</td>
            </tr>
            <tr className="table-row">
              <td className="statistics">Cost</td>
              <td className="task-status">42% under budget</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Health;

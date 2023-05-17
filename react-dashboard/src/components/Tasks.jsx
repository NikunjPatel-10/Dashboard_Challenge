import React from "react";
import CardHeader from "./UI/CardHeader";
import DonutChart from "./DonutChart";

const Tasks = () => {
  return (
    <div className="p-3">
      <div>
        <CardHeader title={"Tasks"} />
      </div>
      <div>
        <DonutChart />
      </div>
    </div>
  );
};

export default Tasks;

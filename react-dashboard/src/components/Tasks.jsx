import React from "react";
import CardHeader from "./UI/CardHeader";
import DonutChart from "./DonutChart";

const Tasks = () => {
  return (
    <div>
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

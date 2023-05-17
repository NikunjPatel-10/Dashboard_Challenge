import React from "react";
import Health from "./../components/Health";
import Tasks from "./../components/Tasks";
import Progress from "../components/Progress";
import Time from "../components/Time";
import Cost from "../components/Cost";
import Workload from "../components/Workload";

const GraphStatics = () => {
  return (
    <div className="h-100 ">
      <div className="row h-50 gx-0">
        <div className="col-4  border-end border-bottom ">
          <Health />
        </div>
        <div className="col-4  border-end border-bottom ">
          <Tasks />
        </div>
        <div className="col-4  border-end border-bottom ">
          <Progress />
        </div>
      </div>
      <div className="row h-50 gx-0">
        <div className="col-4 border-end">
          <Time />
        </div>
        <div className="col-4 border-end">
          <Cost />
        </div>
        <div className="col-4 border-end">
          <Workload />
        </div>
      </div>
    </div>
  );
};

export default GraphStatics;

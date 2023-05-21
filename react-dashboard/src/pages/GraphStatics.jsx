import React from "react";
import Health from "./../components/Health";
import Tasks from "./../components/Tasks";
import Progress from "../components/Progress";
import Time from "../components/Time";
import Cost from "../components/Cost";
import Workload from "../components/Workload";

const GraphStatics = () => {
  return (
    <div className="h-100 d-felx flex-column ">
      <div className="row h-100 gx-0 overflow-auto">
        <div className="col-12  col-sm-6 col-md-6 col-xxl-4  border-end border-bottom ">
          <Health />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-xxl-4  border-end border-bottom ">
          <Tasks />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-xxl-4  border-end border-bottom ">
          <Progress />
        </div>

        {/* <div className="row h-50 gx-0"> */}
        <div className="col-12 col-sm-6 col-md-6 col-xxl-4 border-end time">
          <Time />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-xxl-4 border-end cost">
          <Cost />
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-xxl-4 border-end">
          <Workload />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default GraphStatics;

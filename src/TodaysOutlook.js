import React from "react";
import WxIcons from "./WxIcons";

export default function TodaysOutlook(props) {
  return (
    <div className="TodaysOutlook">
      <div className="card">
        <h5 className="TodaysOutlook-time">6 am</h5>
        <div className="card-body3">
          <WxIcons code={props.data.icon} size={35} />
              <span className="TodaysOutlook-maxTemp"><strong>67°</strong></span>
          </div>
      </div>
    </div>
  );
}
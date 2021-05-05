import React from "react";
import WxIcons from "./WxIcons";


export default function DailyOutlook(props) {
  
    return (
    <div className="DailyOutlook">
       <div className="card">
          <h5 className="DailyOutlook-time">6 AM</h5>
            <WxIcons code={props.data.icon} size={35} />
              <div>
              <span className="ForecastPlanner-maxTemp"><strong>67°</strong></span>
              </div>
            </div>
      </div>
    
    );
  } 
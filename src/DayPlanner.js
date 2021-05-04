import React from "react";
import WxIcons from "./WxIcons";

export default function DayPlanner(props) {
return (
  <div className="card">
          <h5 className="ForecastPlanner-day">{props.data.dt}</h5>
            <WxIcons code={props.data.weather[0].icon} size={35} />
              <div>
              <span className="ForecastPlanner-maxTemp"><strong>{Math.round(props.data.temp.max)}°</strong></span>
              </div>
              <div>
              <span className="ForecastPlanner-minTemp"><em>{Math.round(props.data.temp.min)}°</em></span>
            </div>
        </div>
  );
}
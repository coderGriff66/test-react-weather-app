import React from "react";
import WxIcons from "./WxIcons";
import "./DayPlanner.css";

export default function DayPlanner(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
  ];
    
    return days[day];
  }

  return (

  <div className="card">
          <h5 className="DayPlanner-day">{day()}</h5>
            <div>
            <WxIcons code={props.data.weather[0].icon} size={45} />
            </div>
              <div className="DayPlanner-temps">
                <span className="maxTemp"><strong>{Math.round(props.data.temp.max)}°</strong></span>
              
                  <span className="minTemp">{Math.round(props.data.temp.min)}°</span>
                </div>
        </div>
  );
}
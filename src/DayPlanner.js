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
            <WxIcons className="DayPlanner-icon" code={props.data.weather[0].icon} size={40} />
              <div className="DayPlanner-temps">
                <span><strong>{Math.round(props.data.temp.max)}°</strong></span>
              
                  <span><em>{Math.round(props.data.temp.min)}°</em></span>
                </div>
        </div>
  );
}
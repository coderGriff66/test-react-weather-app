import React from "react";
import WxIcons from "./WxIcons";

export default function WeatherConditions(props) {
  return (
    <div className="WeatherConditions">
      <div className="row">
          <div className="col-7">
            <div className="Card Leftside">
              <h2 className="text-capitalize">{props.data.description}</h2>
                <div className="clearfix">
                  <div className="float-left">
                    <WxIcons code={props.data.icon} />
                  </div>
                  <div className="float-left">
                       <span ClassName="temperature">{Math.round(props.data.temperature)}</span>
                       <span className="unit">°C</span>
                  </div>
                </div>
            </div>
          </div>
        
            <div className="col-5">
              <div className="Card Rightside">
                <ul className="Conditions">
                  <li>Feels Like: <strong>{Math.round(props.data.feelsLike)}°</strong></li>
                  <li>Humidity: <strong>{props.data.humidity}%</strong></li>
                  <li>Wind: <strong>{Math.round(props.data.winds)} km/h</strong></li>
                  <li>Today's Low Temp: <strong>{Math.round(props.data.tempMin)}°</strong></li>
                </ul>
              </div>
            </div>
      </div>
    </div>
    
    );
  }

  

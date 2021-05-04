import React, { useState } from "react";

import DayPlanner from "./DayPlanner";
import axios from "axios";

export default function ForecastPlanner(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }


  if (loaded) {
    return (
    <div className="ForecastPlanner">
       <DayPlanner data={forecast[0]} />
      </div>
    
    );
      
  } else {
    const apiKey = "583dfe3632c0ac709194cc5c5fda136a";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

     axios.get(apiUrl).then(handleResponse);

    return null;
  
}

}

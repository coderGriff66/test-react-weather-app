import React, { useState } from "react";
import axios from "axios";


export default function SearchEngine(props) {
 
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      winds: response.data.wind.speed,
      tempMin: response.data.main.temp_min,
      city: response.data.name

    });
  }

  if (weatherData.ready) {
    return (
    <div className="SearchEngine">
    <form>
          <div className="row">
            <div className="col-6">
              <input type="Search" placeholder="Enter City Name" className="form-control shadow sm" autofocus="on" autocomplete="off"/>
            </div>
               <div className="col-3">
                <input type="submit" value="Search" className="btn btn-success"/>
               </div>
                  <div className="col-3">
                    <button className="CurrentButton">CURRENT</button>
                  </div>
          </div>
    </form>
      <div>
        <h1>{weatherData.city}</h1>
      </div>
    </div>
      
    );    

  } else {
  const apiKey = "583dfe3632c0ac709194cc5c5fda136a";

  let city = "Detroit";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return "Loading";

  }
}
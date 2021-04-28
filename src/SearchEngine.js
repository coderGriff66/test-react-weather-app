import React, { useState } from "react";
import axios from "axios";


export default function SearchEngine() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    setWeatherData({
      
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      winds: response.data.wind.speed,
      tempMin: response.data.main.temp_min,
      city: response.data.name

    });
    setReady(true);
  }

  if (ready) {
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
      
        <div className="row">
          <div className="col-7">
            <div className="Card Leftside">
              <h2 className="text-capitalize">{weatherData.description}</h2>
            <div className="clearfix">
              <img src="/" alt={weatherData.description} className="float-left"/>
                <span ClassName="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
            </div>
          </div>
        </div>
        
          <div className="col-5">
            <div className="Card Rightside">
             <ul className="Conditions">
              <li>Feels Like: <strong>{Math.round(weatherData.feelsLike)}°</strong></li>
              <li>Humidity: <strong>{weatherData.humidity}%</strong></li>
              <li>Wind: <strong>{Math.round(weatherData.winds)} km/h</strong></li>
              <li>Today's Low Temp: <strong>{Math.round(weatherData.tempMin)}°</strong></li>
              </ul>
            </div>
            </div>
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
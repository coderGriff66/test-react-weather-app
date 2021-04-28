import React from "react";
import HeaderDate from "./HeaderDate";
import SearchEngine from "./SearchEngine";
import TodaysOutlook from "./TodaysOutlook";
import ForecastPlanner from "./ForecastPlanner";

import './App.css';

function App() {
  return (
    <div className="App">
     <div className="container">
        <div className="WeatherApp">
          <HeaderDate />
          <SearchEngine />
            <div>
              <h4>DAY PLANNER</h4>
            </div>
         <TodaysOutlook className="Outlook"/>
              <div className="row"> </div>
              <div className="col-3"> </div>
              <div>
              <h4>4-DAY FORECAST</h4>
            </div>
         <ForecastPlanner className="Planner"/>
              <div className="row"> </div>
              <div className="col-3"> </div>
               
                
                   

          <footer>
            This project coded by Jennifer Griffin and is 
            <a href="https://github.com/coderGriff66/test-react-weather-app" target="_blank" rel="noreferrer"> open-sourced on GitHub</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import HeaderDate from "./HeaderDate";
import SearchEngine from "./SearchEngine";

import ForecastPlanner from "./ForecastPlanner";

import './App.css';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
     <div className="container">
        <div className="WeatherApp">
          <HeaderDate />
          <SearchEngine defaultCity="Detroit" />
          
            <div>
              <h4>DAY PLANNER</h4>
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

 

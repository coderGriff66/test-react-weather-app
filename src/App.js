import React from "react";
import HeaderDate from "./HeaderDate";
import SearchEngine from "./SearchEngine";



import './App.css';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
     <div className="container">
        <div className="WeatherApp">
          <HeaderDate />
          <SearchEngine defaultCity="Detroit" />
          
                  
          <br />
          <footer>
            <strong>This project coded by Jennifer Griffin and is</strong>
            <a href="https://github.com/coderGriff66/test-react-weather-app" target="_blank" rel="noreferrer"> open-sourced on GitHub</a>
          </footer>
        </div>
      </div>
    </div>
  );
}

 

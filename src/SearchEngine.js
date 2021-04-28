import React from "react";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
    <form>
          <div className="row">
            <div className="col-6">
              <input type="Search" placeholder="Enter City Name" className="form-control" autofocus="on" autocomplete="off"/>
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
        <h1>Detroit</h1>
      </div>
      
        <div className="row">
          <div className="col-7">
            <div className="Card Leftside">
              <h2 className="text-capitalize">Sunny</h2>
            <div className="clearfix">
              <img src="/" alt="Clear_Sky" className="float-left"/>
                <span ClassName="temperature">60</span>
                <span className="unit">°C</span>
            </div>
          </div>
        </div>
        
          <div className="col-5">
            <div className="Card Rightside">
             <ul className="Conditions">
              <li>Feels Like: <strong>58°</strong></li>
              <li>Barometer: <strong>98.29</strong></li>
              <li>Humidity: <strong>43%</strong></li>
              <li>Wind: <strong>5 km/h</strong></li>
              <li>Day's Low Temp: <strong>48°</strong></li>
              </ul>
            </div>
            </div>
            </div>
       </div>
  
    );
}
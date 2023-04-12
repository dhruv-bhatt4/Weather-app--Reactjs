import React,{useEffect, useState} from "react";
import "./styles/style.css"
const WeatherApp = () => {
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Ahmedabad");

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d7982ebeac56cd6634fe2bbf72fc68da`
            const response=await fetch(url);
            const resJson=await response.json();
            setCity(resJson.main)
            
        }
        fetchApi();
    },[search])
  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            placeholder="Search here"
            value={search}
            className="inputField"
            onChange={(event) => {
                setSearch(event.target.value)
            }}
            
          />
        </div>
      
      {
        !city ? (
            <p>No Data Found</p>
        ):
        <div>
               <div className="info">
        <h2 className="location">
        <i className="fa-solid fa-street-view"></i>{search}
        </h2>
        <h1 className="temp">
            {city.temp}&deg; C
        </h1>
        <h3 className="tempmin_max">
            Min : {city.temp_min}&deg; C
        </h3>
        <h3 className="tempmin_max">
           Max: {city.temp_max}&deg; C
        </h3>
            
        <h3>Humidity: {Math.round(city.humidity)}%</h3>
        
      </div>

      <div className="wave -one"></div>
      <div className="wave -two"></div>
      <div className="wave -three"></div>
        </div>
      }

   

      </div>
    </>
  );
};

export default WeatherApp;

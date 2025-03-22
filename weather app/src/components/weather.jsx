import React, { useState } from "react";
import "./weather.css";
import DateDisplay from "./dateAndTime";

const api = {
  key: "e19ba06a263eba1788b86fba066f8207",
  base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherApp = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (event) => {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
  };

  return (
    <>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={search}>search</button>
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="loaction-box">
            <div className="loaction">
              {weather.name},{weather.sys?.country}
              <DateDisplay />
              <div className="temp">
                {weather.main?.temp
                  ? `${Math.round(Number(weather.main.temp))}°C`
                  : "Temperature not available"}
              </div>
              <div className="weather">{weather.weather?.[0]?.main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </>
  );
};

export default WeatherApp;

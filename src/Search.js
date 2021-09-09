import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      name: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c9b52ad5a848357992faab561bbd3f83";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="search"
        placeholder="Enter a city.."
        onChange={updateCity}
        autocomplete="off"
      />
      <button type="Submit" value="search" className="btn btn-primary">
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li className="description">{weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <h1 className="city-name"> {weather.name} </h1>
            <img
              className="main-icon"
              src={weather.icon}
              alt={weather.description}
            />
            <li className="current-temp">
              {Math.round(weather.temperature)}°C
            </li>
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function Forecast() {
  return (
    <div className="week-forecast">
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="white"
        size={48}
        animate={true}
      />
      <ReactAnimatedWeather
        icon="WIND"
        color="white"
        size="48"
        animate={true}
      />
      <ReactAnimatedWeather
        icon="PARTLY_CLOUDY_DAY"
        color="white"
        size="48"
        animate={true}
      />
      <ReactAnimatedWeather
        icon="RAIN"
        color="white"
        size={48}
        animate={true}
      />
      <ReactAnimatedWeather
        icon="RAIN"
        color="white"
        size={48}
        animate={true}
      />
    </div>
  );
}

import WeatherData from "@/components/weather/WeatherData";
import React from "react";
import LocaleTime from "@/components/weather/LocaleTime"
const Weather = () => {
  return (
    <div className="border h-[500] w-[700] p-4 flex flex-col m-auto">
      <WeatherData />
      <LocaleTime />
    </div>
  );
};

export default Weather;

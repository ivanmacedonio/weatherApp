import React from "react";
import { useState } from "react";
import { WeatherForm } from "./WeatherForm";

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  async function loadInfo(city='london') {
    try {
      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=053c018326544c0bb31145348231209&q=${city}aqi=no`

      );
      const json = await request.json();
      console.log(json);
    } catch (error) {}
  }

  function handleChangeCity(city){
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity}></WeatherForm>
      <div>info</div>
    </div>
  );
};

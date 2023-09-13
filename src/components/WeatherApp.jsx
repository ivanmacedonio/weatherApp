import React from "react";
import { useState, useEffect} from "react";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => { ///apenas se ejecuta la app, se ejecuta este useeffect, dando un clima por defecto para no dejar la pantalla blanca
    loadInfo()
  }, []) ///con arreglo vacio se ejecuta cada vez que se renderize la pagina
  
  useEffect(() => {
    document.title = `Weather / ${weather?.location.name ?? ""}`
  }, [weather])
  

  async function loadInfo(city='london') {
    try {
      const request = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=053c018326544c0bb31145348231209&q=${city}aqi=no`

      );
      const json = await request.json();
      setWeather(json)
      console.log(json);
    } catch (error) {} 
  }

  function handleChangeCity(city){
    setWeather(null);
    loadInfo(city);
  }
///con ? indicamos que es opcional 
  return (
    <div>
      <WeatherForm onChangeCity={handleChangeCity}></WeatherForm>
      <WeatherMainInfo weather={weather}></WeatherMainInfo> 
    </div>
  );
};

import React from "react";

import { WeatherType } from "../types";

import BgSeoul from "./bg-seoul.png";

import styled from "styled-components";

const WeatherStyle = styled.div`
  width: 250px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 18px 25px 11px rgba(0, 0, 0, 0.31);
  border-radius: 30px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const Weather: React.FC<{ weather: WeatherType }> = ({ weather }) => {
  console.log(weather);

  return (
    <WeatherStyle>
      <div className="upperCard">
        <img src={BgSeoul} alt="" />
      </div>
      <div className="lowerCard">
        <span>Temp: {weather.temp} &deg;</span>
        <br />
        <span>Feels Like: {weather.feels_like}</span>
      </div>
    </WeatherStyle>
  );
};

export default Weather;

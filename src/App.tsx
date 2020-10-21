import React, { useState, useEffect } from "react";

import styled from "styled-components";

// component
import Weather from "./components/weather";

// types
import { WeatherType } from "./types";

const AppStyle = styled.div`
  background-color: #f3f2ef;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const initWeather: WeatherType = {
  feels_like: 0,
  grnd_level: 0,
  humidity: 0,
  pressure: 0,
  sea_level: 0,
  temp: 0,
  temp_max: 0,
  temp_min: 0,
};

const App: React.FC = () => {
  const [data, setData] = useState<WeatherType>(initWeather);

  useEffect(() => {
    // fetch data

    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?id=1835847&units=metric&appid=${process.env.REACT_APP_MY_API}`
      );

      let json = await res.json();

      // console.log(json.main);

      setData(json.main);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AppStyle>
      <Weather weather={data} />
    </AppStyle>
  );
};

export default App;

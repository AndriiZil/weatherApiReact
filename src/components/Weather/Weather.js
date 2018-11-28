import React from 'react';
import './Weather.css';

const Weather = props => (
  <div>
    { props.city &&
      <div className="Weather">
        <p>Местоположение: <span>{props.city}</span>, <span>{props.country}</span></p>
        <p>Температура: <span>{props.temp} &#8451;</span></p>
        <p>Ветер: <span>{props.wind} м/с</span></p>
        <p>Влажность: <span>{props.humidity}%</span></p>
        <p>Давление: <span>{props.pressure}</span></p>
        <p>Восход солнца: <span>{props.sunrise}</span></p>
        <p>Заход солнца: <span>{ props.sunset }</span></p>
      </div>
    }
      <p className="error">{ props.error }</p>
  </div>
);

export default Weather;

import React, { Component } from 'react';

import './App.css';

import Info from './components/Info/Info';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';

const API_KEY = '0b3909c83e4e4fc28d7898444ae7eb59';

class App extends Component {

  state = {
    city: undefined,
    country: undefined,
    temp: undefined,
    wind: undefined,
    humidity: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  };

  gettingWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;

    if (city) {
      const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      var sunset = data.sys.sunset;
      var date = new Date(sunset*1000);
      console.log(date);
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      var time = h + ":" + m + ":" + s;
      console.log(time);

      var sunn = data.sys.sunrise;
      var sun = new Date(sunn*1000);
      console.log(sun);
      var h_s = sun.getHours();
      var m_s = sun.getMinutes();
      var s_s = sun.getSeconds();

      var sunrise = h_s + ":" + m_s + ":" + s_s;

      this.setState({
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        pressure: data.main.pressure,

        sunrise: sunrise,
        sunset: time,
        error: undefined
      })
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temp: undefined,
        wind: undefined,
        humidity: undefined,
        pressure: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города"
      })
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="leftSide">
            <Info />
          </div>
          <div className="rightSide">
            <Form weatherMethod={this.gettingWeather} />
            <Weather
              city={this.state.city}
              country={this.state.country}
              temp={this.state.temp}
              wind={this.state.wind}
              humidity={this.state.humidity}
              pressure={this.state.pressure}
              sunrise={this.state.sunrise}
              sunset={this.state.sunset}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Form from "./components/Form";
import Info from "./components/Info";

import { WEATHER_KEY } from "./keys";

class App extends Component {
  state = {
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: 0,
    city: "",
    country: "",
    error: null,
  };
  getWeather = async (e) => {
    e.preventDefault();

    const { city, country } = e.target.elements;
    const cityData = city.value;
    const countryData = country.value;
    if (cityData && countryData) {
      // metric parameter is for Celcius Unit
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityData},${countryData}&appid=${WEATHER_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();

      data.cod == "404"
        ? this.setState({ error: "Please enter an enabled city and country" })
        : this.setState({ error: null });

      this.setState({
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
      });
    } else {
      if (cityData && !countryData) {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityData}&appid=${WEATHER_KEY}&units=metric`;
        const response = await fetch(API_URL);
        const data = await response.json();
        data.cod == "404"
          ? this.setState({ error: "Please enter an enabled city" })
          : this.setState({ error: null });

        this.setState({
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
        });
      } else {
        this.setState({
          error: "Please enter a City and a Country.",
        });
      }
    }
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <Form getWeather={this.getWeather} />

            {this.state.temperature ? <Info {...this.state} /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

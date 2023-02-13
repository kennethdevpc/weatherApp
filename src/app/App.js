import React, { Component } from "react";
import Footer from "./components/footer/footer";
import Form from "./components/Form";
import Info from "./components/Info";
import NavBar from "./components/navbar";

import { WEATHER_KEY } from "./keys";

class App extends Component {
  state = {
    fahrenheit: false,
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
      data.cod == "404"
        ? this.setState({ fahrenheit: false })
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
        data.cod == "404"
          ? this.setState({ fahrenheit: false })
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
        this.setState({ fahrenheit: false });
      }
    }
  };

  changeScale = async (e) => {
    if (!this.state.fahrenheit) {
      this.setState({ fahrenheit: true });
      const fahrenheit = this.state.temperature * (9 / 5) + 32;
      this.setState({ temperature: fahrenheit.toFixed(2) });
    } else {
      const celcius = (this.state.temperature - 32) * (5 / 9);
      this.setState({ temperature: celcius.toFixed(2) });
      this.setState({ fahrenheit: false });
    }
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <NavBar />
            <Form getWeather={this.getWeather} />

            {this.state.temperature ? (
              <Info {...this.state} changeScale={this.changeScale} />
            ) : (
              ""
            )}
          </div>
        </div>
        <hr></hr>
        <div class="card">
          <div id="123" class="card-header">
            Description
          </div>
          <div class="card-body">
            <h5 class="card-title">Weather app</h5>
            <p class="card-text">
              build an application, to which a text is sent with the name of the
              city and if you want to be more specific, the name of the country,
              with which it responds with the information of that city Input:
              City name Output: Date, city name, temperature and other weather
              data Options to switch between Celsius and Fahrenheit.
            </p>
          </div>
        </div>
        <hr></hr>
        <div id="1234"></div>
        <Footer />
      </div>
    );
  }
}

export default App;

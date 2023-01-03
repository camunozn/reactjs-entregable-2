import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import DetailBox from "./assets/components/DetailBox";
import RoundedSwitch from "./assets/components/RoundedSwitch";

function App() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&appid=852a367fa6c1539099cab7030f736988&units=metric"
      )
      .then((res) => setWeatherData(res.data));
  }, []);

  console.log(weatherData);

  // Safe clause
  if (!weatherData) {
    return <h1 className="heading-primary">Loading data...</h1>;
  }

  const city = weatherData.name;
  const country = weatherData.sys.country;
  const weatherIcon = weatherData.weather[0].icon;
  const weatherText = weatherData.weather[0].main;
  const mainTemp = Math.round(weatherData.main.temp);
  const maxTemp = Math.round(weatherData.main.temp_max);
  const minTemp = Math.round(weatherData.main.temp_min);

  return (
    <div className="App">
      <header className="header">
        <h1 className="heading-primary">
          The accurate weather &mdash; whether you like it or not
        </h1>
      </header>
      <main>
        <section className="section-summary">
          <div className="container flex">
            <div className="summary-city">
              <h2 className="heading-secondary">
                {city}, {country}
              </h2>
            </div>
            <div className="summary-degrees flex">
              <img
                className="degrees-icon"
                src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                alt="Icono clima"
              />
              <p className="degrees-text">{mainTemp}ºC</p>
            </div>
            <div className="summary-climate flex">
              <p className="climate-text">{weatherText}</p>
              <p className="climate-hilow">
                H: {maxTemp}º | L: {minTemp}º
              </p>
            </div>
          </div>
        </section>
        <section className="section-details">
          <div className="container grid grid--2--columns">
            <DetailBox
              title={"Precipitation"}
              icon={"fa-solid fa-umbrella"}
              detail={"40%"}
            />
            <DetailBox
              title={"UV index"}
              icon={"fa-solid fa-sun-plant-wilt"}
              detail={"11"}
            />
            <DetailBox
              title={"Wind speed"}
              icon={"fa-solid fa-wind"}
              detail={"8 Km/h"}
            />
            <DetailBox
              title={"Pressure"}
              icon={"fa-solid fa-arrow-down"}
              detail={"1 bar"}
            />
          </div>
        </section>
        <section className="section-options">
          <div className="container grid grid--2--columns">
            <div className="options options-location">
              <h3 className="heading-tertiary">Location</h3>
              <div className="location-current flex">
                <i className="fa-solid fa-location-dot"></i>
                <a href="#">current location</a>
              </div>
              <div className="location-search flex">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" />
              </div>
            </div>
            <div className="options options-units">
              <h3 className="heading-tertiary">Units</h3>
              <div className="units-degrees grid grid--3--columns">
                <p className="degrees-unit unit--left">ºC</p>
                <RoundedSwitch />
                <p className="degrees-unit unit--right">ºF</p>
              </div>
              <div className="units-speed grid grid--3--columns">
                <p className="speed-unit unit--left">Km/h</p>
                <RoundedSwitch />
                <p className="speed-unit unit--right">mi/h</p>
              </div>
              <div className="units-pressure grid grid--3--columns">
                <p className="pressure-unit unit--left">Pa</p>
                <RoundedSwitch />
                <p className="pressure-unit unit--right">bar</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-copyright">
          Made with 💜 and ☕ in Quito - Ecuador
        </div>
      </footer>
    </div>
  );
}

export default App;

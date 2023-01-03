import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import DetailBox from "./assets/components/DetailBox";
import RoundedSwitch from "./assets/components/RoundedSwitch";

function App() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    function success(position) {
      const { coords } = position;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=852a367fa6c1539099cab7030f736988&units=metric`
        )
        .then((res) => setWeatherData(res.data));
    }

    function error(err) {
      alert("Could not get your position");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  console.log(weatherData);

  return (
    <div className="App">
      <>
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
                  {weatherData?.name}, {weatherData.sys?.country}
                </h2>
              </div>
              <div className="summary-degrees flex">
                <img
                  className="degrees-icon"
                  // src=""
                  src={`https://openweathermap.org/img/wn/${weatherData.weather?.[0].icon}@2x.png`}
                  alt="Icono clima"
                />
                <p className="degrees-text">
                  {Math.round(weatherData.main?.temp)}ºC
                </p>
              </div>
              <div className="summary-climate flex">
                <p className="climate-text">{weatherData.weather?.[0].main}</p>
                <p className="climate-hilow">
                  H: {Math.round(weatherData.main?.temp_max)}º | L:{" "}
                  {Math.round(weatherData.main?.temp_min)}º
                </p>
              </div>
            </div>
          </section>
          <section className="section-details">
            <div className="container grid grid--2--columns">
              <DetailBox
                title={"Precipitation"}
                icon={"fa-solid fa-umbrella"}
                detail={`${weatherData.rain?.["1h"]} mm`}
              />
              <DetailBox
                title={"Humidity"}
                icon={"fa-solid fa-sun-plant-wilt"}
                detail={`${weatherData.main?.humidity} %`}
              />
              <DetailBox
                title={"Wind speed"}
                icon={"fa-solid fa-wind"}
                detail={`${weatherData.wind?.speed} m/s`}
              />
              <DetailBox
                title={"Pressure"}
                icon={"fa-solid fa-arrow-down"}
                detail={`${weatherData.main?.pressure} hPa`}
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
                  <p className="speed-unit unit--left">m/s</p>
                  <RoundedSwitch />
                  <p className="speed-unit unit--right">mi/h</p>
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
      </>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import DetailBox from "./assets/components/DetailBox";
import RoundedSwitch from "./assets/components/RoundedSwitch";

import thunderstorm from "./assets/img/thunderstorm.jpg";
import drizzle from "./assets/img/drizzle.jpg";
import rain from "./assets/img/rain.jpg";
import snow from "./assets/img/snow.jpg";
import clear from "./assets/img/clear.jpg";
import clouds from "./assets/img/clouds.jpg";

function App() {
  //Variables declaration
  const imgArray = [
    { condition: "Thunderstorm", img: thunderstorm },
    { condition: "Drizzle", img: drizzle },
    { condition: "Rain", img: rain },
    { condition: "Snow", img: snow },
    { condition: "Clear", img: clear },
    { condition: "Clouds", img: clouds },
  ];
  const [weatherData, setWeatherData] = useState({});
  const [toggleDegrees, setToggleDegrees] = useState(false);
  //handler functions
  const handleDegreesChange = function () {
    setToggleDegrees(!toggleDegrees);
  };

  //Load weather data
  useEffect(() => {
    function success(position) {
      const { coords } = position;
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.WEATHER_API_KEY}&units=metric`
        )
        .then((res) => setWeatherData(res.data));
    }

    function error(err) {
      alert("Could not get your position");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  // Change image backgroud
  const imgEl = imgArray.find(
    (el) => el.condition === weatherData.weather?.[0].main
  );
  document.body.style.backgroundImage = `url(${imgEl?.img})`;

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
                  {!toggleDegrees
                    ? `${Math.round(weatherData.main?.temp)} ??C`
                    : `${Math.round((weatherData.main?.temp * 9) / 5 + 32)} ??F`}
                </p>
              </div>
              <div className="summary-climate flex">
                <p className="climate-text">{weatherData.weather?.[0].main}</p>
                <p className="climate-hilow">
                  {!toggleDegrees
                    ? `H: ${Math.round(
                        weatherData.main?.temp_max
                      )}?? | L: ${Math.round(weatherData.main?.temp_min)}??`
                    : `H: ${Math.round(
                        (weatherData.main?.temp_max * 9) / 5 + 32
                      )}?? | L: ${Math.round(
                        (weatherData.main?.temp_min * 9) / 5 + 32
                      )}??`}
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
                icon={"fa-solid fa-droplet"}
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
                  <input className="search-input" type="text" />
                </div>
              </div>
              <div className="options options-units">
                <h3 className="heading-tertiary">Units</h3>
                <div className="units-degrees grid grid--3--columns">
                  <p className="degrees-unit unit--left">??C</p>
                  <RoundedSwitch
                    toggleSwitch={toggleDegrees}
                    handleChange={handleDegreesChange}
                  />
                  <p className="degrees-unit unit--right">??F</p>
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
            Made with ???? and ??? in Quito - Ecuador
          </div>
        </footer>
      </>
    </div>
  );
}

export default App;

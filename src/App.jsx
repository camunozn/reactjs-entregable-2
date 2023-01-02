import { useState } from "react";
import "./App.css";
import DetailBox from "./assets/components/DetailBox";
import RoundedSwitch from "./assets/components/RoundedSwitch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="header">
        <div className="app-logo"></div>
        <h1 className="heading-primary">
          The accurate weather &mdash; whether you like it or not
        </h1>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li className="main-nav-link">
              <a href="">Home</a>
            </li>
            <li className="main-nav-link">
              <a href="">Details</a>
            </li>
            <li className="main-nav-link">
              <a href="">Options</a>
            </li>
          </ul>
        </nav>
        <div className="menu-mobile"></div>
      </header>
      <main>
        <section className="section-summary">
          <div className="summary-city">
            <h2 className="heading-secondary">Quito, Ecuador</h2>
          </div>
          <div className="summary-degrees">
            <div className="container flex">
              <img src="" alt="Icono clima" />
              <p>24ºC</p>
            </div>
          </div>
          <div className="summary-climate">
            <div className="container flex">
              <p>Sunny</p>
              <p>H: 28º | L: 15º</p>
            </div>
          </div>
        </section>
        <section className="section-details">
          <div className="container details-container grid grid--2--columns">
            <div className="details-box detail--1">
              <DetailBox
                title={"Precipitation"}
                icon={"fa-solid fa-umbrella"}
                detail={"40%"}
              />
            </div>
            <div className="details-box detail--2">
              <DetailBox
                title={"UV index"}
                icon={"fa-solid fa-sun-plant-wilt"}
                detail={"11"}
              />
            </div>
            <div className="details-box detail--3">
              <DetailBox
                title={"Wind speed"}
                icon={"fa-solid fa-wind"}
                detail={"8 Km/h"}
              />
            </div>
            <div className="details-box detail--4">
              <DetailBox
                title={"Pressure"}
                icon={"fa-solid fa-arrow-down"}
                detail={"1 bar"}
              />
            </div>
          </div>
        </section>
        <section className="section-options">
          <div className="container options-container grid grid--2--columns">
            <div className="options-location">
              <h3 className="heading-tertiary">Location</h3>
              <div className="container flex">
                <i className="fa-solid fa-location-dot"></i>
                <a href="">current location</a>
              </div>
              <div className="container flex">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" />
              </div>
            </div>
            <div className="options-units">
              <h3 className="heading-tertiary">Units</h3>
              <div className="units-degrees flex">
                <p className="degrees-unit unit--left">ºC</p>
                <RoundedSwitch />
                <p className="degrees-unit unit--right">ºF</p>
              </div>
              <div className="units-speed flex">
                <p className="speed-unit unit--left">Km/h</p>
                <RoundedSwitch />
                <p className="speed-unit unit--right">mi/h</p>
              </div>
              <div className="units-pressure flex">
                <p className="pressure-unit unit--left">Pa</p>
                <RoundedSwitch />
                <p className="pressure-unit unit--right">bar</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-copyright">Copyright</div>
      </footer>
    </div>
  );
}

export default App;

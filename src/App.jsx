import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="header">
        <div className="app-logo"></div>
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
          <div className="summary-city">Quito, Ecuador</div>
          <div className="summary-degrees">Icono + 24ºC</div>
          <div className="summary-climate">Sunny H: 28º L:15º</div>
        </section>
        <section className="section-details">
          <div className="details-box detail--1">Precipitation</div>
          <div className="details-box detail--2">UV index</div>
          <div className="details-box detail--3">Wind speed</div>
          <div className="details-box detail--4">Pressure</div>
        </section>
        <section className="section-options">
          <div className="options-location">Location</div>
          <div className="options-units">Units</div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-copyright">Copyright</div>
      </footer>
    </div>
  );
}

export default App;

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
          <div className="summary-city">
            <h2>Quito, Ecuador</h2>
          </div>
          <div className="summary-degrees">
            <img src="" alt="Icono clima" />
            <p>24ºC</p>
          </div>
          <div className="summary-climate">
            <p>Sunny</p>
            <p>H: 28º | L: 15º</p>
          </div>
        </section>
        <section className="section-details">
          <div className="details-box detail--1">Box Component</div>
          <div className="details-box detail--2">Box Component</div>
          <div className="details-box detail--3">Box Component</div>
          <div className="details-box detail--4">Box Component</div>
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

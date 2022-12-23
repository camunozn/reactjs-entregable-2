import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="app-logo"></div>
        <nav className="main-nav"></nav>
        <div className="menu-mobile"></div>
      </header>
      <main>
        <section className="section-summary"></section>
        <section className="section-details"></section>
        <section className="section-options"></section>
      </main>
    </div>
  );
}

export default App;

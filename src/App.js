import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          This project was coded by Ira Onishchenko and is {""}
          <a href="https://github.com/Ira-Onishchenko/portfolio-project">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

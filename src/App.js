import "./App.css";
import axios from "axios";

import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <body>
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <div className="row"></div>
            <div className="col">
              <div className="row">
                <div className="col-sm-6"></div>
              </div>
              {/* <Forecast /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}

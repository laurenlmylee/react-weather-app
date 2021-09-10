import "./App.css";

import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <body>
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <div className="row">
              <div className="col-sm-11">
                <div className="float-right"></div>
              </div>
            </div>
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

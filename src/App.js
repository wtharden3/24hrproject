import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";
import Sidebar from "./components/site/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import OpenWeatherApp from "./components/apps/OpenWeatherApp";

const App = () => {
  <div className="App">
    <header className="App-header">
      <h1>React Weather App</h1>
    </header>
    <main>
      <OpenWeatherApp />
    </main>
  </div>;
};
export default App;
//   return (
//     <div>
//       <Header />
//       <Router>
//         <Sidebar />
//       </Router>
//       <Footer />
//     </div>
//   );
// };

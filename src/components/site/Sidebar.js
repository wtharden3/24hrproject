import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import NasaApp from '../apps/NasaApp';
import ZomApp from '../apps/ZomatoApp';
import Resources from './Resources';
import OpenWeatherApp from "../apps/OpenWeatherApp";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-list-styling">
        <ul className="sidebar-list list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/functionalcomponent">Functional Component</Link>
          </li>
          <li>
            <Link to="/nasa">NASA</Link>
          </li>
          <li>
            <Link to="/zomato">Zomato</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/openweatherapp">OpenWeatherApp</Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-route">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/nasa">
            <NasaApp />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/zomato">
            <ZomApp />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/openweatherapp">
            <OpenWeatherApp />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default Sidebar;

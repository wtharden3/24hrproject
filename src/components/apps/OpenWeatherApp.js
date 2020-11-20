import React, { useState } from "react";
import Conditions from "../conditions/Conditions";
import classes from "../conditions/Conditions.module.css";

const url = `https://openweathermap.org/current`;
const key = `c91bf3538d566f07b339918425cc01f8`;

const OpenWeatherApp = () => {
  let [cityName, setCityName] = useState("");
  let [unit, setUnit] = useState("imperial");
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  function getForecast(e) {
    e.preventDefault();
    if (cityName.length === 0) {
      return setError(true);
    }
    <Conditions responseObj={responseObj} error={error} loading={loading} />;
    setError(false);
    setResponseObj({});
    setLoading(true);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${cityName}&appid=${key}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error();
        }
        setResponseObj(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>

        <label className={classes.Radio}>
          <label className={classes.Radio}>
            <button className={classes.Button} type="submit">
              Get Forecast
            </button>
          </label>
        </label>
        <Conditions responseObj={responseObj} />
      </form>
    </div>
  );
};

export default OpenWeatherApp;

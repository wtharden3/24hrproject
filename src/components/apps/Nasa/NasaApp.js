import { useState } from 'react';
import NasaResults from './NasaResults';

const baseURL = `https://api.nasa.gov/planetary/earth/imagery`;
const api_key = `urtj5irIV27ialXiP5agfab2v90sJOfnEalL4Qpa`;

const NasaApp = () => {



  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('')

  


  const findLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=>{
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
      })
    } else {
      console.log('your browser does not support geolocation')
    }
  }

  //const [results, setResults] = useState('');

  // useEffect (() => {

  // })
  

  //let url = `${baseURL}?lon=${lon}&lat=${lat}&date=${date}&api_key=${api_key}`;

  // const google_API_Key = `AIzaSyDpypod1CAGdO3P8HyQsUQTosV-eLF3NfY`;

  //results[0].geometry.location.lat()
  //results[0].geometry.location.lng()

  const fetchResults = () => {
    let url = `${baseURL}?lon=${lon}&lat=${lat}&date=${date}&api_key=${api_key}`;
    console.log(url);
    console.log(
      `https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=DEMO_KEY`
    );

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUrl(data);
      })
      .catch(err => console.log(err))
      .then(console.log('fetched url---->', url));

    // fetch(url)
    //   .then(res => res.json())
    //   .then(data => setResults(data))
    //   .catch(err => console.log(err));
  };

  const handleSubmit = e => {
    e.preventDefault();
    findLocation();
    setUrl(`${baseURL}?lon=${lon}&lat=${lat}&date=${date}&api_key=${api_key}`);
    fetchResults();
    console.log('new url---> ', url);
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <h1>NASA</h1>
        <form onSubmit={e => handleSubmit(e)}>
          <span>Enter a Date</span>
          <br />
          <br />
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            name="date"
            onChange={e => {
              setDate(e.target.value);
            }}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <img className="img-width" src={url} alt="location" />
        <NasaResults url={url} />
      </div>
    </div>
  );
};

export default NasaApp;

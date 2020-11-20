import {useState} from 'react';

const baseURL = `https://api.nasa.gov/planetary/earth/imagery`;
const api_key = `urtj5irIV27ialXiP5agfab2v90sJOfnEalL4Qpa`;

const NasaApp = () => {
  const [search, setSearch] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [results, setResults] = useState([]);

  const google_API_Key = `AIzaSyDpypod1CAGdO3P8HyQsUQTosV-eLF3NfY`;
  let geoCodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&=${google_API_Key}`;

  //results[0].geometry.location.lat()
  //results[0].geometry.location.lng()

  const fetchResults = () => {
    let url = `${baseURL}?lon=${lon}&lat=${lat}&${date}&api_key=${api_key}`;

    fetch (url)
    .then(res => res.json())
    .then(data => setResults(data))
    .catch(err => console.log(err))
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetchResults();
  }

  return(
    <div className='main'>
      <div className="mainDiv">
        <h1>NASA</h1>
        <form onSubmit={e => handleSubmit(e)}>
          <span>Enter a location</span>
        </form>
      </div>
    </div>
  )
}

export default NasaApp;
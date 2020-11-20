import React, {useState, useEffect} from 'react';
import ZomatoResults from './ZomatoResults';
const baseURL = 'https://developers.zomato.com/api/v2.1/search'
const key = 'c84cd3b616dbd6abfc7e1d659a762b20'

const ZomApp = () => {
    const [search, setSearch ] = useState('');
    const [pageNumber, setPageNumber ] = useState('0');
    const [results, setResults ] = useState([]);

    const fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data.response.docs))
        .catch(err => console.log(err))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPageNumber(0);
        fetchResults();
    };

    const changePageNumber = (event, direction) => {
        event.preventDefault();
        if(direction === 'down') {
            if(pageNumber > 0) {
                setPageNumber(pageNumber +1);
                fetchResults();
            }
        }

        if(direction === 'up') {
            setPageNumber(pageNumber + 1);
            fetchResults();
        }
    };

    return(
        <div className="main">
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter the name of your city to find restaurants in your area! : </span>
                    <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
                    <br />
                    <button className="submit">Show me the food!</button>
                </form>
                {
                    results.length > 0 ? <ZomatoResults results ={ results } changePage={ changePageNumber } /> : null
                }
            </div>
        </div>
    )
}

class Tracker extends ZomApp {
    constructor(props) {
    super(props);
    this.state = {
        lat: null,
        lng: null,
    }
    }
    componentWillMount() {

    navigator.geolocation.getCurrentPosition(position => {
        this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
    }, err => console.log(err)
    );
    }
    render() {

    return (
        <div >
        <h1>Current Position:</h1>
        <p>Latitude: {this.state.lat}</p>
        <p>Longitude: {this.state.lng}</p>
        </div>
    );
    }
}

export default ZomApp;


import React, {useState, useEffect} from 'react';
import ZomatoResults from './ZomatoResults';
const baseURL = 'https://developers.zomato.com/api/v2.1/cities?q=Indianapolis'
const key = 'c84cd3b616dbd6abfc7e1d659a762b20'

const ZomApp = () => {
    const [search, setSearch ] = useState('');
    const [pageNumber, setPageNumber ] = usestate('0');
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
                    <span>Enter the name of your CITY to find restaurants in your area! : </span>

                </form>
            </div>
        </div>
    )
}

export default ZomApp;
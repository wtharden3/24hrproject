import React from 'react';

const ZomatoResults = (props) => {
return (
    <div>
    <div>
        { props.results.map(result => {
        return (
            <div key={result.entity_id}>
            <h2>{result.name.main}</h2>
            {result.featured_image.length > 1 ? <img alt="foodz" src={`http://www.zomato.com/data/pictures/${result.featured_image.url}`} /> : ''}
            <p>
            {result.snippet}
            <br />
            {result.price_range.length > 0 ? ' Price Range: ' : ''}
            </p>
            <ul>
            {result.menu_length.map(menu_length => <li key={menu_length.value}>{menu_length.value}</li>)}
            </ul>
            <a href={result.web_url}><button>Gimmie gimmie!</button></a>
        </div>
        )
        })}
        <div>
            <button onClick={(e) => props.changePageNumber(e, 'down')}>Previous 10</button>
            <button onClick={(e) => props.changePageNumber(e, 'up')}>Next 10</button>
        </div>
    </div>
    </div>
)
}

// class Tracker extends ZomApp {
//     constructor(props) {
//     super(props);
//     this.state = {
//         lat: null,
//         lng: null,
//     }
//     }
//     componentWillMount() {

//     navigator.geolocation.getCurrentPosition(position => {
//         this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
//     }, err => console.log(err)
//     );
//     }
//     render() {

//     return (
//         <div >
//         <h1>Current Position:</h1>
//         <p>Latitude: {this.state.lat}</p>
//         <p>Longitude: {this.state.lng}</p>
//         </div>
//     );
//     }
// }

export default ZomatoResults;
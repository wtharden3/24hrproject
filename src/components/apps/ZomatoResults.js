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
            <button onClick={(e) => props.changePageNumber(e, 'down')}>Take me back!</button>
            <button onClick={(e) => props.changePageNumber(e, 'up')}>I'm too indecisive for this!</button>
        </div>
    </div>
    </div>
)
}

export default ZomatoResults;
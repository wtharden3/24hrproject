import './Nasa.css'

const NasaResults = props => {
  return (
    <div>
      {props.url ? <img className="img-width" src={props.url} alt="location" /> : <p>no image found</p>}
    </div>
  );
};

export default NasaResults;

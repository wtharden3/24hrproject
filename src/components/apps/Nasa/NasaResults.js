import './Nasa.css'

const NasaResults = props => {
  return (
    <div>
      {props.url ? <img className="img-width" src={props.url} alt="location" /> : <h1>nothing is coming up 🤬</h1>}
    </div>
  );
};

export default NasaResults;

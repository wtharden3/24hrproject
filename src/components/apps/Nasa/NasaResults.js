const NasaResults = (props) => {
  return(
    <div>
      {props.results.map(results => {
        return(
          <div>{results}</div>
        )
      })}
    </div>
  )
}

export default NasaResults;
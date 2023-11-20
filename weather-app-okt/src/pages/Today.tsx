export const Today = ({ currentData }) => {
  //deconstruction

  if (!currentData) {
    return <div className="container"> LOADING </div>;
  }

  const { condition, last_updated, temp_c } = currentData.data.current;
  const { country, name } = currentData.data.location;
  const { mintemp_c, maxtemp_c } = currentData.data.forecast.forecastday[0].day;

  return (
    <div className="container">
      <div className="location" style={{ fontWeight: 700 }}>
        My Location
      </div>
      <div className="location">{`${name}, ${country}`}</div>
      <div className="temperature">{Math.round(temp_c)}°</div>
      <div className="highLowTemp">
        <div className="low">Low: {Math.floor(mintemp_c)}°</div>
        <div className="high">High: {Math.floor(maxtemp_c)}°</div>
      </div>
      <div className="descrip">{condition.text}</div>
      <div className="bottom">
        <p>last updated: {last_updated}</p>
      </div>
    </div>
  );
};

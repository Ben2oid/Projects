import { useEffect, useState } from "react";

export const Forecast = ({ forecastData }) => {
  if (!forecastData) {
    return <div className="container"> LOADING... </div>;
  }

  const [offsetX, setOffsetX] = useState<number>(0);
  const [start, setStart] = useState<number>(0);

  const { forecastday } = forecastData.data.forecast;

  const touchHandler = (e: any) => {
    console.log(e.type === "touchstart");
    e.type === "touchstart"
      ? setStart(e.touches[0].clientX)
      : setStart(e.clientX);
  };
  const moveHandler = (e: any) => {
    e.type === "touchstart"
      ? setOffsetX(e.touches[0].clientX - start)
      : setOffsetX(e.clinetX - start);
  };

  return (
    <div className="container">
      <div
        className="hourly"
        draggable="false"
        onTouchStart={touchHandler}
        onTouchMove={moveHandler}
        onMouseDown={touchHandler}
        onMouseMove={moveHandler}
        style={{ transform: `translateX(${offsetX}px)` }}
      >
        {forecastday[0].hour.map((hour: any, index: number) => {
          return (
            <div className="hour" key={hour.time_epoch}>
              {index}
              <img
                draggable="false"
                src={hour.condition.icon}
                alt={hour.condition.text}
                className="type"
              />
              <div className="temp">{`${Math.round(hour.temp_c)}°`}</div>
              <div className="hourlyChanceRain">{`${hour.chance_of_rain}%`}</div>
            </div>
          );
        })}
      </div>
      <div className="daily">
        {forecastday.map((day: any, index: number) => {
          if (index > 0) {
            return (
              <div key={day.date_epoch} className="day">
                <img
                  src={forecastday[index].day.condition.icon}
                  alt={forecastday[index].day.condition.text}
                  className="condition"
                />
                <div className="average">
                  {`${Math.floor(forecastday[index].day.avgtemp_c)}°`}
                </div>
                <div className="highTemp">{`H: ${Math.floor(
                  forecastday[index].day.maxtemp_c
                )}°`}</div>
                <div className="lowTemp">{`L: ${Math.floor(
                  forecastday[index].day.mintemp_c
                )}°`}</div>
                {!forecastday[index].day.daily_chance_of_snow ? (
                  <div className="chanceRain">{`Rain: ${forecastday[index].day.daily_chance_of_rain}%`}</div>
                ) : (
                  <div className="chanceRain">{`Snow: ${forecastday[index].day.daily_chance_of_snow}%`}</div>
                )}
              </div>
            );
          }
        })}
      </div>
      <div className="bottom">
        <p>last updated: {forecastData.data.current.last_updated}</p>
      </div>
    </div>
  );
};

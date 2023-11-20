export const useSetBg = (weatherData: {
  data: {
    location: { localtime: any };
    forecast: { forecastday: { astro: { sunrise: any; sunset: any } }[] };
  };
}) => {
  let hour: number;
  let sunriseHour: number;
  let sunsetHour: number;
  const body = document.body;

  const settingBackground = () => {
    if (sunriseHour === hour) {
      // console.log("It's sunrise");
      body.style.background = "linear-gradient(#143ab7, #1dc2f9 70%, #fffda2)";
      body.style.backgroundSize = "200% 200%";
      body.style.overflowX = "hidden";
      body.style.transition = "3s";
    } else if (sunriseHour < hour && hour < sunsetHour) {
      // console.log("It's daytime");
      body.style.background = "linear-gradient(#e3d321, #da9617 70%, #ed9b17)";
      body.style.backgroundSize = "200% 200%";
      body.style.overflowX = "hidden";
      body.style.transition = "3s";
    } else if (sunsetHour === hour) {
      // console.log("It's sunset");
      body.style.background =
        "linear-gradient(#ff7568, rgba(255, 187, 104) 70%, #f2ff68)";
      body.style.backgroundSize = "200% 200%";
      body.style.overflowX = "hidden";
      body.style.transition = "3s";
    } else {
      // console.log("It's night");
      body.style.background = "linear-gradient(#000000, #000a2a 70%, #001a63)";
      body.style.backgroundSize = "200% 200%";
      body.style.overflowX = "hidden";
      body.style.transition = "3s";
    }
  };

  if (weatherData) {
    const { localtime } = weatherData.data.location;
    const { sunrise, sunset } = weatherData.data.forecast.forecastday[0].astro;

    // console.log("day:", weatherData);
    hour = parseInt(new Date(localtime).getHours());
    sunriseHour = parseInt(sunrise.slice(0, 2));
    sunsetHour = parseInt(sunset.slice(0, 2)) + 12;
    settingBackground();
  } else {
    body.style.background = "linear-gradient(#e3d321, #da9617 70%, #ed9b17)";
    body.style.backgroundSize = "200% 200%";
    body.style.transition = "3s";
    body.style.overflowX = "hidden";
  }
};

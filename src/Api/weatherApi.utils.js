export function refactorLocations(locations) {
  let id = 0;
  const seenLabels = new Set();
  const uniqueLocations = [];
  locations.forEach((location) => {
    const refactoredLoc = {
      id: id++,
      label: `${location.name}, ${location.state}, ${location.country}`,
      lat: location.lat,
      lon: location.lon,
    };

    if (seenLabels.has(refactoredLoc.label)) return;
    seenLabels.add(refactoredLoc.label);
    uniqueLocations.push(refactoredLoc);
  });
  return uniqueLocations;
}

export function refactorForecast(forecastObj) {
  const {
    city: { name: cityName },
    list,
  } = forecastObj;

  const forecastMap = list.reduce((current, day, index) => {
    const {
      dt_txt,
      weather: [{ description, icon }],
      main: { temp, humidity },
      wind: { speed },
    } = day;

    let [date, time] = (([date, time]) => [
      new Date(date).toDateString(),
      time,
    ])(dt_txt.split(" "));

    const timeKey =
      index + 1 >= list.length ||
      !isNow(
        convertToSeconds(new Date().toLocaleTimeString()),
        convertToSeconds(time),
        convertToSeconds(list[index + 1].dt_txt.split(" ")[1])
      )
        ? time
        : "Now";

    const forecastItem = {
      date: date.slice(0, date.length - 4),
      iconUrl: `https://openweathermap.org/img/wn/${icon}@2x.png`,
      weatherDesc: description,
      temp: `${Math.round(temp)}°C`,
      humidity: `${Math.round(humidity)}%`,
      windSpeed: `${Math.round(speed * 3.6)}km/h`,
    };
    current[timeKey] = forecastItem;
    return current;
  }, {});

  return {
    cityName,
    forecastMap,
  };
}

function convertToSeconds(time) {
  const [hours, minutes, seconds] = time.split(":");
  return Number(seconds) + Number(minutes) * 60 + Number(hours) * 60 * 60;
}

function isNow(currentTime, prevTime, nextTime) {
  return currentTime >= prevTime && currentTime <= nextTime;
}

const apiKey = import.meta.env.VITE_API_KEY;

async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Http Error With Status Code: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function fetchGeoLocation(city) {
  const baseGeoUrl = import.meta.env.VITE_BASE_GEO_URL;
  const url = `${baseGeoUrl}?q=${city}&limit=5&appid=${apiKey}`;
  const locations = await fetchData(url);
  let id = 0;
  return locations.map((location) => {
    return {
      id: id++,
      label: `${location.name}, ${location.state}, ${location.country}`,
      lat: location.lat,
      lon: location.lon,
    };
  });
}

export async function fetchWeeklyForecast(lat, lon) {
  const baseWeatherUrl = import.meta.env.VITE_BASE_WEATHER_URL;
  const url = `${baseWeatherUrl}?lat=${lat}&lon=${lon}&cnt=8&units=metric&lang=en&appid=${apiKey}`;
  return await fetchData(url);
}

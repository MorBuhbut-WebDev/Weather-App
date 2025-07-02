import { createContext, useContext, useReducer } from "react";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const useActiveSource = () => {
  const { weatherState } = useWeather();
  const activeSource = weatherState.activeSource;
  return activeSource ? weatherState[activeSource] : null;
};

export const useSelectedTime = () => {
  const activeSource = useActiveSource();
  const selectedTime = activeSource?.forecast?.selectedTime;
  const forecastMap = activeSource?.forecast?.map;
  return forecastMap ? forecastMap[selectedTime] : null;
};

export default function WeatherProvider({ children }) {
  const [weatherState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "UPDATE_ACTIVE_SOURCE":
          return {
            ...state,
            activeSource: action.payload,
          };

        case "UPDATE_LOCATION":
          return {
            ...state,
            [action.payload.activeSource]: {
              ...state[action.payload.activeSource],
              location: action.payload.location,
            },
          };

        case "UPDATE_FORECAST":
          return {
            ...state,
            [state.activeSource]: {
              ...state[state.activeSource],
              forecast: {
                cityName: action.payload.cityName,
                selectedTime: action.payload.selectedTime,
                map: action.payload.map,
              },
            },
          };

        default:
          return state;
      }
    },
    {
      activeSource: null, // "User" | "City" | null
      User: {
        location: null, // { lat, lon } | null
        forecast: {
          cityName: null,
          selectedTime: "Now", // 21:00 | 00:00...
          map: null, // { "Now": {...weatherData} }
        },
      },
      City: {
        location: null, // { lat, lon } | null
        forecast: {
          cityName: null,
          selectedTime: "Now", // 21:00 | 00:00...
          map: null, // { "Now": {...weatherData} }
        },
      },
    }
  );

  return (
    <WeatherContext.Provider value={{ weatherState, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}

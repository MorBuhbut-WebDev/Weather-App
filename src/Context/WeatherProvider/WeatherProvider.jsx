import { createContext, useContext, useReducer } from "react";

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export default function WeatherProvider({ children }) {
  const [weatherState, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "UPDATE_USER_LOCATION":
          return {
            ...state,
            userLocation: action.payload,
          };

        case "UPDATE_SELECTED_LOCATION":
          return {
            ...state,
            selectedLocation: action.payload,
          };

        case "UPDATE_FORECAST":
          return {
            ...state,
            forecast: { city: action.payload.city, obj: action.payload.obj },
          };

        default:
          return state;
      }
    },
    {
      userLocation: null,
      selectedLocation: null,
      forecast: {
        city: null,
        obj: {},
      },
      selectedForecast: "Now",
    }
  );

  return (
    <WeatherContext.Provider value={{ weatherState, dispatch }}>
      {children}
    </WeatherContext.Provider>
  );
}

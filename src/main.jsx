import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./Components/App/App.jsx";
import WeatherProvider from "./Context/WeatherProvider/WeatherProvider.jsx";
import LoadingProvider from "./Context/LoadingProvider/LoadingProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </LoadingProvider>
  </StrictMode>
);

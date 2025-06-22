import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./Components/App/App.jsx";
import LocationProvider from "./Context/LocationProvider/LocationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LocationProvider>
      <App />
    </LocationProvider>
  </StrictMode>
);

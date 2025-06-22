import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

export const useLocationContext = () => useContext(LocationContext);

export default function LocationProvider({ children }) {
  const [currentLocation, setCurrentLocation] = useState({
    coords: null,
    status: "Declined",
    error: true,
  });

  return (
    <LocationContext.Provider value={{ currentLocation, setCurrentLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

import {
  getUserLocation,
  declineLocation,
} from "../../../Context/LocationProvider/LocationProvider.utils.js";

export function handleToggleLocation(
  setSelectedOption,
  setCurrentLocation,
  isAproved = true
) {
  if (isAproved) {
    getUserLocation().then((location) => setCurrentLocation(location));
    setSelectedOption("Yes");
  } else {
    setCurrentLocation(declineLocation());
    setSelectedOption("No");
  }
}

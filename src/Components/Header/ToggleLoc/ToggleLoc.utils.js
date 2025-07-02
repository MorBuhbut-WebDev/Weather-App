export function handleToggleLocation(
  weatherState,
  dispatch,
  setSelectedOption,
  isAproved
) {
  if (isAproved) {
    getUserLocation().then((location) => {
      if (!weatherState.activeSource)
        dispatch({ type: "UPDATE_ACTIVE_SOURCE", payload: "User" });
      dispatch({
        type: "UPDATE_LOCATION",
        payload: { location, activeSource: "User" },
      });
    });
    setSelectedOption("Yes");
  } else {
    dispatch({
      type: "UPDATE_LOCATION",
      payload: { location: null, activeSource: "User" },
    });
    if (weatherState.activeSource === "User")
      dispatch({ type: "UPDATE_ACTIVE_SOURCE", payload: null });
    setSelectedOption("No");
  }
}

function getUserLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        resolve({ lat, lon });
      },
      undefined,
      {
        enableHighAccuracy: true, // GPS if available
        timeout: 10000, // 10 seconds max wait
        maximumAge: 0, // Don't use cached location
      }
    );
  });
}

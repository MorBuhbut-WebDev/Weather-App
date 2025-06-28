export function handleToggleLocation(setSelectedOption, dispatch, isAproved) {
  if (isAproved) {
    getUserLocation().then((location) =>
      dispatch({ type: "UPDATE_USER_LOCATION", payload: location })
    );
    setSelectedOption("Yes");
  } else {
    dispatch({
      type: "UPDATE_USER_LOCATION",
      payload: null,
    });
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

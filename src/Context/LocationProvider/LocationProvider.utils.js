export function getUserLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        resolve({ coords: { lat, lon }, status: "Accepted", error: false });
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

export function declineLocation() {
  return {
    coords: null,
    status: "Declined",
    error: true,
  };
}

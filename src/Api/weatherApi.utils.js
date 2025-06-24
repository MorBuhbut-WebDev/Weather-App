export function refactorLocations(locations) {
  let id = 0;
  const seenLabels = new Set();
  const uniqueLocations = [];
  locations.forEach((location) => {
    const refactoredLoc = {
      id: id++,
      label: `${location.name}, ${location.state}, ${location.country}`,
      lat: location.lat,
      lon: location.lon,
    };

    if (seenLabels.has(refactoredLoc.label)) return;
    seenLabels.add(refactoredLoc.label);
    uniqueLocations.push(refactoredLoc);
  });
  return uniqueLocations;
}

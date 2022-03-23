const calculateDistance = (
  [latitude1, longitude1],
  [latitude2, longitude2]
) => {
  const radLat1 = (Math.PI * latitude1) / 180;
  const radLat2 = (Math.PI * latitude2) / 180;

  const theta = longitude1 - longitude2;
  const radTheta = (Math.PI * theta) / 180;

  let distance =
    Math.sin(radLat1) * Math.sin(radLat2) +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);

  distance = Math.acos(distance);
  distance = (distance * 180) / Math.PI;
  distance = distance * 60 * 1.1515;

  distance = distance * 1.609344;

  return distance;
};

export default async function sortByDistance(file, refCoords) {
  const coordsWithDistance = file.map(({ ipv4, geo }) => ({
    key: ipv4,
    ipv4,
    geo,
    distance: calculateDistance(geo.split(','), refCoords.split(',')),
  }));

  return coordsWithDistance.sort((a, b) => a.distance - b.distance);
}

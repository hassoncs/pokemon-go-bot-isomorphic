import turf from 'turf';

function distanceBetweenLatLngs(latLngA, latLngB) {
  const featureA = latLngToFeaturePoint(latLngA);
  const featureB = latLngToFeaturePoint(latLngB);
  return turf.distance(featureA, featureB, 'kilometers') * 1000;
}

function latLngToFeaturePoint(latLng) {
  return {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [latLng.lng, latLng.lat],
    }
  };
}

function getLatLngAlong(sourceLatLng, destLatLng, distanceMeters) {
  const line = latLngsToFeatureLine(sourceLatLng, destLatLng);
  const distanceKm = distanceMeters / 1000;
  const along = turf.along(line, distanceKm, 'kilometers');
  return featureToLatLng(along);
}

function latLngsToFeatureLine(latLngA, latLngB) {
  return {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [latLngA.lng, latLngA.lat],
        [latLngB.lng, latLngB.lat],
      ],
    }
  };
}

function featureToLatLng(feature) {
  var coordinates = feature.geometry.coordinates;
  return {lat: coordinates[1], lng: coordinates[0]};
}

function randomLatLng(latLng, distance) {
  const feature = latLngToFeaturePoint(latLng);
  const bearing = Math.random() * 360 - 180;
  const destination = turf.destination(feature, distance, bearing, 'kilometers');
  return featureToLatLng(destination);
}

module.exports = {
  distanceBetweenLatLngs,
  latLngToFeaturePoint,
  getLatLngAlong,
  latLngsToFeatureLine,
  featureToLatLng,
  randomLatLng,
};

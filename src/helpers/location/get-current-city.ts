import * as Location from "expo-location";

const getCurrentCity = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== Location.PermissionStatus.GRANTED) {
    // eslint-disable-next-line no-alert
    alert("Permission to access location was denied");
    return;
  }

  let location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.Highest,
  });

  const [place] = await Location.reverseGeocodeAsync({
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  });

  return place.city?.replace(/\W/gi, "");
};

export { getCurrentCity };

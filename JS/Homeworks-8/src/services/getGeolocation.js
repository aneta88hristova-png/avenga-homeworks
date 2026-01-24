export async function getGeolocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
      return; // Lägg till return för att stoppa vid fel
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(new Error(`Unable to retrieve location: ${error.message}`));
      },
    );
  });
}

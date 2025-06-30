export const getUserLocation = (onSuccess, onError) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      onError(new Error("Geolocation not supported"));
    }
  };
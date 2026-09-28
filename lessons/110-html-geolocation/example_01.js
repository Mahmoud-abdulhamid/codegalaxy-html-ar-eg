function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
    success, error);
  } else {
    x.innerHTML = "Not supported.";
  }
}

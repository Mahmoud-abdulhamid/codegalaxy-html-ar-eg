function error(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "Denied.";
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Unavailable.";
      break;
  }
}

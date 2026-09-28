xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4) {
    if (this.status == 200) {
      elmnt.innerHTML = this.responseText;
    }
    elmnt.removeAttribute("w3-include-html");
    includeHTML();
  }
};

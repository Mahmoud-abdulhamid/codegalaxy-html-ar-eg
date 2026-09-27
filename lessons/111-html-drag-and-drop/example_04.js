function dropHandler(ev) {
  ev.preventDefault();
  const data = 
    ev.dataTransfer.getData("text");
  ev.target.appendChild(
    document.getElementById(data)
  );
}

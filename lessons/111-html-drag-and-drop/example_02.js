function dragstartHandler(ev) {
  ev.dataTransfer.setData(
    "text", 
    ev.target.id
  );
}

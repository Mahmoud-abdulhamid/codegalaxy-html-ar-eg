w = new Worker("demo_workers.js");
w.onmessage = function(event) {
  document.getElementById("result").innerHTML =
  event.data;
};

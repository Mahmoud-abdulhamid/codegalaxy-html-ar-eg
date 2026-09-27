if(typeof(EventSource) !== "undefined") {
  var source = new EventSource("demo_sse.php");
  source.onmessage = function(event) {
    document.getElementById("result").innerHTML += 
    event.data + "<br>";
  };
} else {
  alert("No support!");
}

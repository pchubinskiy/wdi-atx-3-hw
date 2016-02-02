$(function() {

  var time = 0;
  var startTiming;

  $("#reset").click(function(event) {
    document.getElementById("time").innerHTML = 0;
  });

  $("#start").click(function(event) {
    startTiming = setInterval(function() {
      time++;
      document.getElementById("time").innerHTML = time;
    }, 1000);
  });

  $("#pause").click(function(event) {
    clearInterval(startTiming);
  });

});


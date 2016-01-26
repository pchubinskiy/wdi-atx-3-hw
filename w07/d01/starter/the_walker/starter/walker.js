// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var leftBorder = 400;
var rightBorder = 700;

$(function() {

  function goRight() {
    $("#walker").css({
      "-moz-transform": "scaleX(-1)",
        "-o-transform": "scaleX(-1)",
        "-webkit-transform": "scaleX(-1)",
        "transform": "scaleX(-1)",
        "filter": "FlipH",
        "-ms-filter": "FlipH"
    });
    $("#walker").animate({
      left: rightBorder
    }, 1000, function() {
      setTimeout(goLeft, 50);
    });
  }

  function goLeft() {
    $("#walker").css({
      "-moz-transform": "",
        "-o-transform": "",
        "-webkit-transform": "",
        "transform": "",
        "filter": "",
        "-ms-filter": ""
    });
    $("#walker").animate({
      left: leftBorder
    }, 1000, function() {
      setTimeout(goRight, 50);
    });
  }

  setTimeout(goRight, 50);
});

// Have the stick figure start at the right border and start walking left
// When he crosses the left border, have him turn around and start walking right (and vice versa)
// Bonus: Make him turn around when you click on him

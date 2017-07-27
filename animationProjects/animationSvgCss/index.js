// VARIABLES

var $slider = $("#weather-setter");
var severity = $slider.val();
var $puffs = $(".puff");
var $rain = $("#rain");
var initialSkyColour = "#4f9db5";
var numberOfRaindrops = 500; 
var $sun = $("#sun");

// FUNCTIONS

// figure out how much the sun should be shining and make it so
function handleSun(severity) {
  if(severity >= 50) {
    $sun.css({
      opacity: 0
    });
  } else {
    // var sunOpacity = Math.abs(((severity * 2) - 100) / 100);
    var sunOpacity = (50 - severity)/50;
    $sun.css({
      opacity: sunOpacity
    });
  }
}

// change the sky colour
function handleSkyColour(severity) {
  
    if (severity >= 0 && severity < 10) {
      newSkyColour = initialSkyColour;
    } else if (severity >= 10 && severity < 20) {
      newSkyColour = "#addded";
    } else if (severity >= 20 && severity < 30) {
      newSkyColour = "#8ac5d8";
    } else if (severity >= 30 && severity < 40) {
      newSkyColour = "#6db1c6";
    } else if (severity >= 40 && severity < 50) {
      newSkyColour = "#4f9db5";
    } else if (severity >= 50 && severity < 60) {
      newSkyColour = "#368ba5";
    } else if (severity >= 60 && severity < 70) {
      newSkyColour = "#1d7893";
    } else if (severity >= 70 && severity < 80) {
      newSkyColour = "#0e637c";
    } else if (severity >= 80 && severity < 90) {
      newSkyColour = "#05536b";
    } else if (severity >= 90) {
      newSkyColour = "#003547";
    }
 
    return newSkyColour;
}

// this rain business was modified from Aurélien Lemesre's CodePen here: https://codepen.io/alemesre/pen/hAxGg

// generate a random number within a range
function randomNumInRange( min, max ) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

// // create drops of rain
function createRain() {

	for( i = 1 ; i < numberOfRaindrops ; i++ ) {
	  var dropLeft = randomNumInRange(0,280);
	  var dropTop = randomNumInRange(-900,900);

	  $rain.append('<div class="drop" id="drop'+i+'"></div>');
	  $('#drop'+i).css('left', dropLeft);
	  $('#drop'+i).css('top', dropTop);
	}
}

// check if it should be raining, and if yes, make it rain
function isRaining(severity) {
  if (severity >= 50) {
    $rain.slideDown();
  } else {
    $rain.slideUp();
  }
}

// check if there should be lightning, and if yes, show the lightning
function isLightning(severity) {
  if (severity >= 80) {
    $(".lightning").addClass("lightning-active");
  } else {
    $(".lightning").removeClass("lightning-active");
  }
}

// change/activate all the weather-changing stuff
function setWeather(severity) {
  
  // set the cloud colour
  var percentage = severity + "%";
  
  $puffs.css({
   'background-position-y' : percentage
  });
  
  // set the sky colour
  var newSkyColour = handleSkyColour(severity);
  
  $("body").css({
    'background-color': newSkyColour
  });
  
  // handle the rain
  isRaining(severity);
  
  // handle the lightning
  isLightning(severity);
  
  // handle the sun
  handleSun(severity);
}

// create the rain at the start (it will be hidden at first)
createRain();


// EVENT LISTENERS

// when the user moves the slider, get the severity and change the weather
$slider.on("mousemove", function(){
  severity = $slider.val();
  setWeather(severity);
})


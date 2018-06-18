// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  var dancer = {};

  // use jQuery to create an HTML <span> tag
  dancer.$node = $('<span class="dancer"></span>');

  dancer.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(dancer.step, timeBetweenSteps);
  };
  dancer.step();
/*
input: number representing delay between steps
output: none, but executes the setTimeout 
constraints: none
edge cases: none
*/
  dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    dancer.$node.css(styleSettings);
  };

/*
input: numbers representing top and left coordinates
output: none but places the "element" at the coordinates
constraints: needs to be within dancefloor's bounds
edge cases: if coordinates are same as previous, no movement
*/

/*
constructor
input: 3 numbers representing top/left coordinates and ms delay
output: a new instance of Dancer at the coordinates and  that performs a step after
delay ms
constraints: none
edge cases: none*/

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  dancer.setPosition(top, left);

  return dancer;
};

/*
converting functional to pseudoclassical

methods need ot be outside constructor body
methods stored on the class' prototype
no explicit return statement
no explicit instance of object
*/
var InteractiveDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //'this' is bound to BlinkyDancer. BlinkyDancer is subclassed from Dancer.
  Dancer.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('interactiveDancer');
  this.$node.append('<img class="interactiveDancer" src="http://www.japantrends.com/japan-trends/wp-content/uploads/2015/10/gudetama-lazy-egg.png"></img>')
  this.step();

  // this.setPosition(top, left);
  // this.$node = $('<img src= https://artwithimpact.org/wp-content/uploads/gudetama.jpg></img>');
  // this.$node.css('background', 'url("https://artwithimpact.org/wp-content/uploads/gudetama.jpg")');
  // this.$node.css('height', '15%');
  // this.$node.css('width', '15%')
};

InteractiveDancer.prototype = Object.create(Dancer.prototype);
InteractiveDancer.prototype.constructor = InteractiveDancer;

InteractiveDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // console.log('inside method' + JSON.stringify(this.$node))  
  Dancer.prototype.step.call(this)
  $('.interactiveDancer').css('animation-name', 'example');
  $('.interactiveDancer').css('animation-duration', '4s');
  $('.interactiveDancer').css('animation-iteration-count', 'infinite');
  $('.interactiveDancer').css('animation-direction', 'reverse');


 };

/* 
converting functional to pseudoclassical

methods need ot be outside constructor body
methods stored on the class' prototype
no explicit return statement
no explicit instance of object
change references to the instance to "this"
added argument to pass in timeBetweenSteps in .step method
delegating subclass (blinkyDancer) prototype to refer to the super class (Dancer)

*/
var FlippyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //'this' is bound to ShakyDancer. ShakyDancer is subclassed from Dancer.
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('flippyDancer');
  this.$node.append('<img class="flippyDancer" src="https://bongkbong.files.wordpress.com/2017/04/tumblr_o2whg3ucq31uzh6soo1_500.png"></img>')
  this.step();

};

FlippyDancer.prototype = Object.create(Dancer.prototype);
FlippyDancer.prototype.constructor = FlippyDancer;

FlippyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

// call the old version of step at the beginning of any call to this new version of step
// toggle() is a jQuery method to show/hide the <span> tag.
// See http://api.jquery.com/category/effects/ for this and
// other effects you can use on a jQuery-wrapped html tag.
// console.log('inside method' + JSON.stringify(this.$node))  
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
var GrowyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //'this' is bound to spinnyDancer. spinnyDancer is subclassed from Dancer.
  Dancer.call(this, top, left, timeBetweenSteps)
  this.step();
};

GrowyDancer.prototype = Object.create(Dancer.prototype);
GrowyDancer.prototype.constructor = GrowyDancer;

GrowyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // console.log('inside method' + JSON.stringify(this.$node))  
  Dancer.prototype.step.call(this)
  this.$node.css('animation-name', 'example');
  this.$node.css('animation-duration', '4s');
  this.$node.css('animation-iteration-count', 'infinite');


 };

/* 

in the node's css
  animation-name: example;
    animation-duration: 4s;
@keyframes example {
    from {width: 100px; height: 100px}
    to {width: 200px; height: 200px}
}

converting functional to pseudoclassical

methods need ot be outside constructor body
methods stored on the class' prototype
no explicit return statement
no explicit instance of object
change references to the instance to "this"
added argument to pass in timeBetweenSteps in .step method
delegating subclass (blinkyDancer) prototype to refer to the super class (Dancer)

*/
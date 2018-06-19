var BlinkyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //'this' is bound to BlinkyDancer. BlinkyDancer is subclassed from Dancer.
  Dancer.call(this, top, left, timeBetweenSteps)
//var oldStep = this.step;
  // console.log(oldStep);
  // console.log ("this refers to " + JSON.stringify(this) + "this.node refers to " + JSON.stringify(this.$node));
  this.step();
  // this.$node = $('<span class="dancer"></span>');
 // console.log (' this is for node, ', this.$node)

};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;



BlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // console.log('inside method' + JSON.stringify(this.$node))
  console.log('prior to the .call', this);    
Dancer.prototype.step.call(this)
    //setTimeout(this.step, this.timeBetweenSteps) ;
 // console.log (this)
// debugger;
  this.$node.toggle();
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
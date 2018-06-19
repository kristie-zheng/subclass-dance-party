var BlinkyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //'this' is bound to BlinkyDancer. BlinkyDancer is subclassed from Dancer.
  Dancer.call(this, top, left, timeBetweenSteps)
  // this.setPosition(top, left);
  // this.$node = $('<img src= https://artwithimpact.org/wp-content/uploads/gudetama.jpg></img>');
  // this.$node.css('background', 'url("https://artwithimpact.org/wp-content/uploads/gudetama.jpg")');
  this.$node.append('<img src="http://www.japantrends.com/japan-trends/wp-content/uploads/2015/10/gudetama-lazy-egg.png"></img>')
  // this.$node.css('height', '15%');
  // this.$node.css('width', '15%')
  this.step();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // console.log('inside method' + JSON.stringify(this.$node))  
  Dancer.prototype.step.call(this)
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
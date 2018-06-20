var InteractiveDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //'this' is bound to BlinkyDancer. BlinkyDancer is subclassed from Dancer.
var randomVal = Math.floor((Math.random() * window.dancers.length));
dancerToFollow = (window.dancers[randomVal]); 
console.log(dancerToFollow)
top = dancerToFollow.top;
left = dancerToFollow.left + 100;

Dancer.call(this, top, left, timeBetweenSteps)
  this.$node.addClass('interactiveDancer');
  this.$node.append('<img class="interactiveDancer" src="https://2.bp.blogspot.com/-8Cy2vEWRzZo/WPVrt8CKY_I/AAAAAAAOm_k/Vk0OY4zMl50fNdcssB61euVdx63tIR8GgCLcB/s1600/AS002524_03.gif"></img>')
  this.step();
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
  $('.interactiveDancer').css('animation-name', 'shifty');
  $('.interactiveDancer').css('animation-duration', '4s');
  $('.interactiveDancer').css('animation-iteration-count', 'infinite');
  // keyframes.appendRule("0% { top }");

// keyframes.appendRule("0% { -webkit-transform: rotate(" + randomFromTo(-360,360) + "deg); }");
  // keyframes.insertRule("0% { -webkit-transform: rotate("+randomFromTo(-360,360)+"deg); }");
  // $('.interactiveDancer').css('animation-direction', 'reverse');


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
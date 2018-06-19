$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addCommand').on('click', function() {
      var commandMaker = $(this).data('command-maker-function-name');
      // var commandMakerFunction = w  indow[commandMaker];
      var lineUp = function() {
        for (let i = 0; i < window.dancers.length; i++) {
          var eachDancer = window.dancers[i];
          var lineUpPosition = {
            top: 450,
            left: 120 * i
          };
          eachDancer.$node.css(lineUpPosition);
        }
      } 
      lineUp();
      console.log(window.dancers);
    })

  $('body').on('click', '.flippyDancer', function() {
    // $('.flippyDancer').css('animation-direction', 'reverse')
    $(this).addClass('reverse');
    console.log('this is the button', this)

  })
});













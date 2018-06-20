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
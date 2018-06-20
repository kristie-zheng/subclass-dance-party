describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });
  });


describe('growyDancer', function() {

  var growyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growyDancer = new GrowyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(growyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should inherit from the dancer class', function() {
    expect((growyDancer.$node).hasClass('dancer')).to.be.true;
  });
  it('should call step at least once per second', function() {
      sinon.spy(growyDancer, 'step');
      expect(growyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(growyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(growyDancer.step.callCount).to.be.equal(2);
    });


 });

  describe('flippyDancer', function() {

  var flippyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    flippyDancer = new FlippyDancer(10, 20, timeBetweenSteps);
  });

    it('should have a jQuery $node object', function() {
      expect(flippyDancer.$node).to.be.an.instanceof(jQuery);
    });
  
    it('should inherit from the dancer class', function() {
      expect((flippyDancer.$node).hasClass('dancer')).to.be.true;
    });
    it('should call step at least once per second', function() {
      sinon.spy(flippyDancer, 'step');
      expect(flippyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(flippyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(flippyDancer.step.callCount).to.be.equal(2);
    });
  });


  describe('lineUp', function() {
  beforeEach(function() {
    clock = sinon.useFakeTimers();    
  });
  it('should cause the dancers to line up', function() {
    var flippyDancer = new FlippyDancer(10, 20);
    var growyDancer = new GrowyDancer(10, 20);      
    lineUp();
    expect(flippyDancer.top).to.equal(growyDancer.top);
    });
  })

  describe('interactiveDancer', function() {
  
  var interactiveDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    console.log(window.dancers)

  });

    it('should have a jQuery $node object', function() {
    flippyDancer = new FlippyDancer(10, 20, timeBetweenSteps);
    interactiveDancer = new InteractiveDancer(10, 20, timeBetweenSteps);
      expect(interactiveDancer.$node).to.be.an.instanceof(jQuery);
    });
  
    it('should inherit from the dancer class', function() {
      expect((interactiveDancer.$node).hasClass('dancer')).to.be.true;
    });
    it('should call step at least once per second', function() {
    flippyDancer = new FlippyDancer(10, 20, timeBetweenSteps);
    interactiveDancer = new InteractiveDancer(10, 20, timeBetweenSteps);
      sinon.spy(interactiveDancer, 'step');
      expect(interactiveDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);

      expect(interactiveDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(interactiveDancer.step.callCount).to.be.equal(2);
    });
  });



describe("personDancer 1.0", function() {

  var personDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    personDancer = new PersonDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(personDancer.$node).to.be.an.instanceof(jQuery);
  });


  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(personDancer, "step");
      expect(personDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(personDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(personDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe("personDancer v 2.0", function() {

  var personDancer;

  beforeEach(function() {
    personDancer = new PersonDancer(580, 20, 100);
  });

  it("should have a jQuery $node object", function(){
    expect(personDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function", function() {
    expect(personDancer.step).to.be.a('function');
  });

  it("should delegate to Dancer", function() {
    expect(personDancer).to.be.an.instanceof(Dancer);
  });

  it("should point to the right constructor", function() {
    expect(personDancer.constructor).to.equal(PersonDancer);
  });

  it("should be an image", function() {
    expect(personDancer.img.substring(0, 3)).to.equal('img');
  });
});

describe("logoDancer", function() {

  var logoDancer;

  beforeEach(function() {
    logoDancer = new LogoDancer(580, 20, 100);
  });

  it("should have a jQuery $node object", function(){
    expect(logoDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function", function() {
    expect(logoDancer.step).to.be.a('function');
  });

  it("should delegate to Dancer", function() {
    expect(logoDancer).to.be.an.instanceof(Dancer);
  });

  it("should point to the right constructor", function() {
    expect(logoDancer.constructor).to.equal(LogoDancer);
  });

  it("should be an image", function() {
    expect(logoDancer.logo.substring(0, 3)).to.equal('img');
  });
});

// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.time = timeBetweenSteps;
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // this.setPosition(top, left);
};
  Dancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var that = this;
    setTimeout( that.step.bind(that), that.time );
  };

  Dancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    this.$node.css( {'top': top, 'left': left} );
  };

  Dancer.prototype.lineUp = function(){
    for(var i = 0; i < dancers.length; i++){
      dancers[i].$node.css('left', 0);
    }
  };
  Dancer.prototype.random = function(number) {
    return Math.floor(Math.random() * number) + '.png';
  }

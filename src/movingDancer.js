var MovingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.left = 0;
};

MovingDancer.prototype = Object.create(Dancer.prototype);

MovingDancer.prototype.constructer = MovingDancer;

MovingDancer.prototype.oldStep = Dancer.prototype.step;

MovingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // this.step.call(Dancer, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var leftOrRight = Math.floor(Math.random()*2);
  if( leftOrRight ){
    this.$node.animate( "margin-left", (this.left + 50) + 'px');
  }else{
    this.$node.animate( "margin-left", (this.left - 50) + 'px');
  }
};


var MorphingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.size = 0;
};

MorphingDancer.prototype = Object.create(Dancer.prototype);

MorphingDancer.prototype.constructer = MorphingDancer;

MorphingDancer.prototype.oldStep = Dancer.prototype.step;

MorphingDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // this.step.call(Dancer, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  if(Math.floor(Math.random()*2)) {
    this.$node.css( "height", (this.size += Math.floor(Math.random()*20)) + 'px');
    this.$node.css( "width", (this.size += Math.floor(Math.random()*20)) + 'px');
  } else{
    this.$node.css( "height", (this.size -= Math.floor(Math.random()*20)) + 'px');
    this.$node.css( "width", (this.size -= Math.floor(Math.random()*20)) + 'px');
  }

};


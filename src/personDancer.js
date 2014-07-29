var PersonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.img = 'img/people/' + this.random(14) + '.gif';
  this.position = 0;
  this.$node = $('<img class="personDancer" src="' + this.img + '"></img>');
  this.leftOrRight = this.random(2);
  if( this.leftOrRight ){
    this.$node.addClass('right');
  }
  this.setPosition(580, left);
};

PersonDancer.prototype = Object.create(Dancer.prototype);

PersonDancer.prototype.constructer = PersonDancer;

PersonDancer.prototype.oldStep = Dancer.prototype.step;

PersonDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // this.step.call(Dancer, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
  if( this.random(2) ){
    this.$node.animate({ "left": "+=25px" }, "slow" );
  }else {
    this.$node.animate({ "left": "-=25px" }, "slow" );
  }
};


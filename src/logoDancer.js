var LogoDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.logo = "img/" + this.random(6) + '.png';
  this.$node = $('<img class="logoDancer" src="' + this.logo + '"></img>');
  this.setPosition(top, left);
};

LogoDancer.prototype = Object.create(Dancer.prototype);

LogoDancer.prototype.constructer = LogoDancer;

LogoDancer.prototype.oldStep = Dancer.prototype.step;

LogoDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();

  // this.step.call(Dancer, timeBetweenSteps);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  if( this.$node.css('width') === '350px' ){
    this.$node.animate( {width: '250px'} );
  }else{
    this.$node.animate( {width: '350px'} );
  }
};


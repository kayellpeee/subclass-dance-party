var MorphingDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  var randomLogo = ( Math.floor(Math.random()*6) ) + '.png';
  this.logo = "img/" + randomLogo;
  this.$node = $('<img class="morphingDancer" src="' + this.logo + '"></img>');
  this.$node.css( {top: top, left: left} );
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
  if( this.$node.css('width') === '350px' ){
    this.$node.animate( {width: '250px'} );
  }else{
    this.$node.animate( {width: '350px'} );
  }
};


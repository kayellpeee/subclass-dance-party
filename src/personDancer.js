var PersonDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.img = 'img/people/' + this.random(14) + '.gif';
  this.position = 0;
  this.$node = $('<img class="personDancer" src="' + this.img + '"></img>');
  this.leftOrRight = this.random(2);
  if( this.leftOrRight ){
    this.$node.addClass('right');
  }
  this.neighbor = 0;
  this.setPosition(580, left);
};

PersonDancer.prototype = Object.create(Dancer.prototype);

PersonDancer.prototype.constructor = PersonDancer;

// PersonDancer.prototype.oldStep = Dancer.prototype.step;

PersonDancer.prototype.step = function(){
  // this.oldStep();
  Dancer.prototype.step.call(this);

  if( this.random(2) ){
    this.left += 15;
    this.$node.animate({ "left": this.left + "px"} );
  }else {
    this.right -= 15;
    this.$node.animate({ "left": this.left + "px"} );
  }
};

PersonDancer.prototype.fight = function(){
  if( dancers.length > 1 ){
    var removedChar = false;
    var dancerDOM = $('.personDancer');
    for( var char1 = 0; char1 < dancerDOM.length; char1++ ){
      var char1LeftVal = dancerDOM[char1].style.left.substring(0, 8);
      var char1Width = $('.personDancer')[char1].width;
      for( var char2 = 0; char2 < dancerDOM.length; char2++ ){
        var char2LeftVal = dancerDOM[char2].style.left.substring(0, 8);
        var distance = (char2LeftVal - char1LeftVal);
        if( distance < 0 ){
          distance = distance * -1;
        }
        if( (distance <= char1Width) && (distance > 0) ) {
          var moveChar = function(character, distance){
            character.$node.animate( { 'top' : distance + 'px' });
          };
          moveChar(dancers[char1], 300);
          moveChar(dancers[char2], 300);
          setTimeout(function() {
            dancerDOM[char1].remove();
            moveChar(dancers[char2], 580);
            dancers.splice(char1, 1);
        }, 1000);
          removedChar = true;
          break;
        }
      }
      if( removedChar ){
        break;
      }
    }
  }
};

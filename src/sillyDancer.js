window.SillyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.$node.addClass('sillyDancer');
};

SillyDancer.prototype = Object.create(Dancer.prototype);
SillyDancer.prototype.constructor = SillyDancer;

SillyDancer.prototype.step = function() {
  if (this.$node.hasClass('stop')) {
    Dancer.prototype.step.call(this);
  } else {
    this.move();
  }
};

SillyDancer.prototype.move = function() {
  this.t += 0.05;
  const newLeft = Math.floor(Math.random() * $( window ).width());
  const newTop = Math.floor(Math.random() * $( window ).height());
  this.$node.animate({
    top: newTop,
    left: newLeft,
  }, this.timeBetweenSteps);
  Dancer.prototype.step.call(this);
};

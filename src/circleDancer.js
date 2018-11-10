window.CircleDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.top = top;
  this.radius = Math.floor(Math.random() * 500);
  this.t = 0;
  this.timeBetweenSteps = timeBetweenSteps / 10;
  this.step();
  this.$node.addClass('circleDancer');
};

CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;

CircleDancer.prototype.step = function() {
  if (this.$node.hasClass('stop')) {
    Dancer.prototype.step.call(this);
  } else {
    this.move();
  }
};

CircleDancer.prototype.move = function() {
  this.t += 0.05;
  const left = Math.floor(this.left + (this.radius * Math.cos(this.t)));
  const top = Math.floor(this.top + (this.radius * Math.sin(this.t)));
  this.$node.animate({
    top,
    left,
  }, 1);
  Dancer.prototype.step.call(this);
};
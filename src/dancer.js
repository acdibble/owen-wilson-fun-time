// Creates and returns a new dancer object that can step
window.Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.$node.css({ top, left });
};

Dancer.prototype.lineUp = function(left) {
  if (this.$node.hasClass('stop')) {
    this.$node.animate({
      top: $(window).height() / 2,
      left,
    });
  } else {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};

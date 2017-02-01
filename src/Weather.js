function Weather() {
};

Weather.prototype.isStormy = function() {
  var number = Math.random();

  if(this.number > 0.7) {
    return this.stormy = false
  }
  else {
    return this.stormy = true
  };
};

function Weather() {
  this._stormy = true
};

Weather.prototype.isStormy = function() {
  var number = Math.random()

  if(number > 0.7) {
   this._stormy = true
  } else {
   this._stormy = false
  };
};

Weather.prototype.stormy = function() {
  return this._stormy
};

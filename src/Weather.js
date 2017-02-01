function Weather() {
  this._stormy = true
};

Weather.prototype.isStormy = function() {
  var number = Math.random()

  if(number > 0.5) {
   this._stormy = false
  } else {
   this._stormy = true
  };
};

Weather.prototype.stormy = function() {
  return this._stormy
};

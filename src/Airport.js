function Airport() {
  this.planes = []
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeoff = function() {
  this.planes.pop()
};

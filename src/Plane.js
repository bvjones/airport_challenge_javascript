function Plane() {
  this._airborne = true
};

  Plane.prototype.isAirborne = function() {
    return this._airborne
  };

  Plane.prototype.land = function() {
    this._airborne = false
  };

  Plane.prototype.takeoff = function() {
    this._airborne = true
  };

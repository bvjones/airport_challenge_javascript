describe('Plane', function(){

  var plane = new Plane();

  describe('on initialization', function(){
    it('it is airborne', function(){
      expect(plane.isAirborne()).toBe(true);
    });
  });

  describe('#on landing', function(){
    it('changes airborne to false', function(){
      plane.land();
      expect(plane.isAirborne()).toBe(false);
    });
  });

  describe('#on takeoff', function(){
    it('changes airborne to true', function(){
      plane.land();
      plane.takeoff();
      expect(plane.isAirborne()).toBe(true);
    });
  });


});

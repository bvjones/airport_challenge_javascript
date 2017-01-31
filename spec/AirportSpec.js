describe('Airport', function() {


  var airport = new Airport();
  var plane = new Plane();



  describe('on initialization', function(){
    it('it has an empty array of planes', function(){
      expect(airport.planes).toEqual([]);
    });
  });

  describe('#land(plane)', function() {
    it('lands a plane', function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  });

});

describe('Weather', function(){

  var weather = new Weather();

  describe('isStormy', function(){
      it('check if weather is stormy', function(){
        weather.isStormy()
        expect(weather.stormy).toBe(true)
      });
  });
});

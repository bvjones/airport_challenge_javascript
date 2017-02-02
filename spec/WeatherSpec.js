describe('Weather', function(){

  var weather = new Weather();

  describe('isStormy', function(){
      it('check if weather is stormy', function(){
        spyOn(weather, 'stormy').and.returnValue(false);
        expect(weather.stormy()).toBe(false)
      });
  });
});

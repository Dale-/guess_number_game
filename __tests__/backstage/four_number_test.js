jest.dontMock('../../js/backstage/four-number');

describe('FourNumber', function() {

  describe('.formFourNumber', function() {
    
    it('it should be return one array that length equal four', function() {

      var FourNumber = require('../../js/backstage/four-number');
      var result = FourNumber.formFourNumber();

      expect(result.length).toBe(4);
    });
  });
});

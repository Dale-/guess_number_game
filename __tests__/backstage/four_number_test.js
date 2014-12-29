jest.dontMock('lodash');
jest.dontMock('../../scripts/backstage/four-number');

describe('FourNumber', function() {

  var FourNumber;
  beforeEach(function() {
    FourNumber = require('../../scripts/backstage/four-number');
  });

  describe('.formFourNumber', function() {

    it('it should be return one array that length equal four', function() {

      var result = FourNumber.formFourNumber();
      expect(result.length).toBe(4);
    });

    it('it should be return EachElementType of array is Number ', function() {

      var result = FourNumber.formFourNumber();

      var isAllTypeNumber = result.every(function(elem) {
        return typeof(elem) === 'number';
      });
      expect(isAllTypeNumber).toBe(true);
    });

  });
});

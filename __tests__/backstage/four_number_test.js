jest.dontMock('lodash');
jest.dontMock('../../scripts/backstage/four-number');

describe('FourNumber', function() {

  describe('.formFourNumber', function() {

    it('it should be return one array that length equal four', function() {

      var FourNumber = require('../../scripts/backstage/four-number');
      var result = FourNumber.formFourNumber();

      expect(result.length).toBe(4);
    });

    it('it should be return EachElementType of array is Number ', function() {

      var FourNumber = require('../../scripts/backstage/four-number');
      var result = FourNumber.formFourNumber();

      var isAllTypeNumber = result.every(function(elem) {
        return typeof(elem) === 'number';
      });

      expect(isAllTypeNumber).toBe(true);
    });

  });
});

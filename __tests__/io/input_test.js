jest.dontMock('lodash');
jest.dontMock('../../js/io/input');
jest.dontMock('../../js/backstage/four-number');

describe('Input', function() {
  var Input;

  beforeEach(function() {
    Input = require('../../js/io/input');
  });

  // describe('#consoleInput', function() {
  //
  //   it('it should be return one array that length equal four', function() {
  //
  //     var result = FourNumber.formFourNumber();
  //
  //     expect(result.length).toBe(4);
  //   });
  //
  // });

  describe('.invertIntType', function() {
    it('it should be return EachElementType of array is Number ', function() {

      var result = Input.invertIntType(['1','2','3','4']);

      var isAllTypeNumber = result.every(function(elem) {
        return typeof(elem) === 'number';
      });

      expect(isAllTypeNumber).toBe(true);
    });
  });

});

jest.dontMock('lodash');
jest.dontMock('readline');
jest.dontMock('../../js/io/io');

describe('IO', function() {

  var IO;
  var array;
  beforeEach(function() {
    IO = require('../../js/io/io');
    array = ['2','4','6','8'];
  });

  describe('.invertIntType', function() {

    it('it should be return one array that length equal four', function() {

      var result = IO.invertIntType(array);
      expect(result.length).toBe(4);
    });


    it('it should be return EachElementType of array is Number ', function() {

      var result = IO.invertIntType(array);
      var isAllTypeNumber = result.every(function(elem) {
        return typeof(elem) === 'number';
      });

      expect(isAllTypeNumber).toBe(true);
    });

  });
});

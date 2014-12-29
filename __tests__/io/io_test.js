jest.dontMock('lodash');
jest.dontMock('readline');
jest.dontMock('../../js/io/io');

describe('IO', function() {

  describe('.invertIntType', function() {

    it('it should be return one array that length equal four', function() {

      var IO = require('../../js/io/io');
      var result = IO.invertIntType(['1','2','3','4']);

      expect(result.length).toBe(4);
    });


    it('it should be return EachElementType of array is Number ', function() {

      var IO = require('../../js/io/io');
      var result = IO.invertIntType(['1','2','3','4']);

      var isAllTypeNumber = result.every(function(elem) {
        return typeof(elem) === 'number';
      });

      expect(isAllTypeNumber).toBe(true);
    });

  });
});

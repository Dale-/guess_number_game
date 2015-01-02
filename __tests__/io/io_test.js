jest.dontMock('lodash');
jest.dontMock('readline');
jest.dontMock('../../scripts/io/io');

describe('IO', function() {

  var IO;
  var array;

  beforeEach(function() {
    IO = require('../../scripts/io/io');
    array = ['2','4','6','8'];
  });

  it('it should be return EachElementType of array is Number ', function() {

    var result = IO.invertIntType(array);
    var isAllTypeNumber = result.every(function(elem) {
      return typeof(elem) === 'number';
    });
    expect(isAllTypeNumber).toBe(true);
  });
});

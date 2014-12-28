jest.dontMock('../../js/io/output');

describe('Output', function() {
  var Output;

  beforeEach(function() {
    Output = require('../../js/io/output');
  });

  describe('.show', function() {

    it('it should be return Congratulation', function() {

      var result = Output.show('4A0B');

      expect(result).toBe('Congratulation');
    });
  });

  describe('.show', function() {

    it('it should be return empty', function() {

      var result = Output.show('4A0B');

      expect(result).toBe('');
    });
  });

});

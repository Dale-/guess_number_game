jest.dontMock('../../js/game-rule/game-rule');

describe('GameRule', function() {

  var GameRule;

  beforeEach(function() {

    GameRule = require('../../js/game-rule/game-rule');

  });


  describe('.IsFourNotRepeat', function() {

    it('it should be return false of notRepeatNumberArray', function() {

      var result = GameRule.IsFourNotRepeat([2,4,6,8]);
      expect(result).toBe(false);
    });

    it('it should be return false of hasRepeatNumberArray', function() {

      var result = GameRule.IsFourNotRepeat([2,6,6,8]);
      expect(result).toBe(true);
    });
  });


  describe('.getAorBorC', function() {

    it('it should be return A', function() {

      var result = GameRule.getAorBorC([2,4,6,8], 0, 2);
      expect(result).toBe('A');
    });

    it('it should be return B', function() {

      var result = GameRule.getAorBorC([2,4,6,8], 1, 2);
      expect(result).toBe('B');
    });

    it('it should be return C', function() {

      var result = GameRule.getAorBorC([2,4,6,8], 0, 1);
      expect(result).toBe('C');
    });

  });

});

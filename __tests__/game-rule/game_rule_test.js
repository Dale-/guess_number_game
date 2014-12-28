jest.dontMock('../../js/game-rule/game-rule');

describe('GameRule', function() {

  describe('.IsFourNotRepeat', function() {

    it('it should be return false of notRepeatNumberArray', function() {

      var GameRule = require('../../js/game-rule/game-rule');
      var result = GameRule.IsFourNotRepeat([2,4,6,8]);

      expect(result).toBe(false);
    });

    it('it should be return false of hasRepeatNumberArray', function() {

      var GameRule = require('../../js/game-rule/game-rule');
      var result = GameRule.IsFourNotRepeat([2,6,6,8]);

      expect(result).toBe(true);
    });
  });
});

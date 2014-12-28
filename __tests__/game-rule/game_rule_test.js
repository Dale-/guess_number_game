jest.dontMock('../../js/game-rule/game-rule');
jest.dontMock('lodash');

describe('GameRule', function() {

  var GameRule;
  var commonArray;

  beforeEach(function() {
    GameRule = require('../../js/game-rule/game-rule');
    commonArray = [2,4,6,8];
  });


  describe('.IsFourNotRepeat', function() {

    it('it should be return false of notRepeatNumberArray', function() {
      var result = GameRule.IsFourNotRepeat(commonArray);
      expect(result).toBe(false);
    });

    it('it should be return false of hasRepeatNumberArray', function() {
      var result = GameRule.IsFourNotRepeat([2,6,6,8]);
      expect(result).toBe(true);
    });
  });


  describe('.getAorBorC', function() {

    it('it should be return A', function() {

      var result = GameRule.getAorBorC(commonArray, 0, 2);
      expect(result).toBe('A');
    });

    it('it should be return B', function() {
      var result = GameRule.getAorBorC(commonArray, 1, 2);
      expect(result).toBe('B');
    });

    it('it should be return C', function() {
      var result = GameRule.getAorBorC(commonArray, 0, 1);
      expect(result).toBe('C');
    });
  });

  describe('.getScore', function() {

    it('it should be return 4A0B', function() {
      var result = GameRule.getScore(commonArray, commonArray);
      expect(result).toBe('4A0B');
    });

    it('it should be return 0A0B', function() {
      var result = GameRule.getScore(commonArray, [0,1,3,9]);
      expect(result).toBe('0A0B');
    });

    it('it should be return 2A0B', function() {
      var result = GameRule.getScore(commonArray, [0,1,6,8]);
      expect(result).toBe('2A0B');
    });

    it('it should be return 0A2B', function() {
      var result = GameRule.getScore(commonArray, [6,8,0,1]);
      expect(result).toBe('0A2B');
    });

    it('it should be return 1A2B', function() {
      var result = GameRule.getScore(commonArray, [2,6,8,0]);
      expect(result).toBe('1A2B');
    });
  });

});

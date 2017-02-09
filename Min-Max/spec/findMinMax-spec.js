'use strict'
var findMinMax = require('../min-max');

(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [4, 9] for [6, 4, 9]', function () {
        expect(findMinMax([6, 4, 9])).toEqual([4, 9]);
      });

      it('should return [0, 9] for [6, 0, 4, 9]', function () {
        expect(findMinMax([6, 0, 4, 9])).toEqual([0, 9]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [1,8] for [1, 2, 5, 8, 3 , 4]', function () {
        expect(findMinMax([1, 2, 5, 8, 3 , 4])).toEqual([1,8]);
      });

      it('should return [0, 1001] for [4, 66, 6, 0, 44, 7, 1001, 50, 78, 67, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 0, 44, 7, 1001, 50, 78, 67, 8, 68, 2])).toEqual([0, 1001]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [55] for [55, 55]', function () {
        expect(findMinMax([55, 55])).toEqual([55]);
      });

      it('should return [0] for [0, 0]', function () {
        expect(findMinMax([0, 0])).toEqual([0]);
      });

    });

  });

})();
'use strict'

module.exports = function (numbers) {
	var minNum = numbers[0],
		maxNum = numbers[0];
	for (var i = 1; i < numbers.length; i++){
		if(numbers[i] > maxNum){
			maxNum = numbers[i];
		}
		if(numbers[i] < minNum){
			minNum = numbers[i];
		}
	}
	return (minNum === maxNum)? [minNum] : [minNum, maxNum];
}
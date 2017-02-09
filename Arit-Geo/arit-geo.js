'use strict'

module.exports = function(ls){
	const len = ls.length;
	if (len == 0) return 0;

	function isArithmetic(ls){
	    const a = ls[0];
	    const d = ls[1] - ls[0];
	    for (var i = 1; i < ls.length; i++){
	        if(ls[i] != (a + i*d) || d == 0){
	            return false;
	        }
	    }
	    return true;
	}
	function isGeometric(ls){
	    const a = ls[0];
	    const q = ls[1]/ls[0];
	    for (var i = 1; i < ls.length; i++){
	        if(ls[i] != a*(Math.pow(q, i))){
	            return false;
	        }
	    }
	    return true;
	}

	if(len > 1 && isArithmetic(ls)) return 'Arithmetic';
	if(len > 1 && isGeometric(ls)) return 'Geometric';

	return -1;
}
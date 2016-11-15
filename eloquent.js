//Minimum
function min (a, b) {
  if (a > b) {
    return b
  }
  else {return a};
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


//Recursion
function isEven(n) {
	if (n == 0)
  		return true;
  	else if (n == 1)
    	return false;
  	else if (n < 0)
    	return isEven(-n);
  	else
      	return isEven(n-2);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//Bean Counting
function countBs (str) {
  var numBs = 0
  for (var i=0; i < str.length; i++) {
    if (str.charAt(i) == "B") {
      numBs ++;
  	}
  }
 return numBs
}

function countChar (str, char) {
 var chars = 0
  for (var i=0; i < str.length; i++) {
    if (str.charAt(i) == char) {
      chars ++;
  	}
  }
 return chars
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

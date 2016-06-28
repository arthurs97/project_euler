//incomplete
// var temp;

// var lcm = function(a, b){
// 	while (b % a != 0){
// 		temp = b;
// 		b -= (b % a);
// 		a = temp % a;
// 	}
// }

var twoMax = 0, threeMax = 0, fiveMax = 0, sevenMax = 0;
var product;

for (var i = 2; i <= 20; i++){
	var j = i;
	var twoCount = 0, threeCount = 0, fiveCount = 0, sevenCount = 0;
	
	//get the prime factorization. only the number with the highest exponent needs to be multiplied, e.g. 16 = 2^4 excludes the need to remultiply 8 = 2^3
	while (j % 2 === 0){
		j /= 2;
		twoCount++; //need to implement way to disallow lower exponents to end up in the final product
		if (twoCount > twoMax){
			twoMax = twoCount;
		}
	}

	while (j % 3 === 0){
		j /= 3;
		threeCount++;
		if (threeCount > threeMax){
			threeMax = threeCount;
		}
	}

	while (j % 5 === 0){
		j /= 5;
		fiveCount++;
		if (fiveCount > fiveMax){
			fiveMax = fiveCount;
		}
	}

	while (j % 7 === 0){
		j /= 7;
		sevenCount++;
		if (sevenCount > sevenMax){
			sevenMax = sevenCount;
		}
	}
}

//need to look up how to do exponents in javascript efficiently
//product *= (exp(prime, primeMax)) * 11 * 13 * 17 * 19
product = Math.pow(2, twoMax) * Math.pow(3, threeMax) * Math.pow(5, fiveMax) * Math.pow(7, sevenMax) * 11 * 13 * 17 * 19;

console.log("Problem 5 answer is: " + product);

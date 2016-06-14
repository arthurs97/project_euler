var maxFactor = 3;

var primeFactor = function(input){
	//divide out all powers of 2, only odd factors will remain
	while (input % 2 === 0){
		input /= 2;
	}
	//fully prime factorized when the input is divided down to its highest factor
	do{
		while (input % maxFactor === 0){
			input /= maxFactor;
		}
		maxFactor += 2;
	}while(maxFactor < input);

	return maxFactor;
}

console.log("Problem 3 answer: " + primeFactor(600851475143));

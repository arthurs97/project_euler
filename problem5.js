var product = 1;
var maxFactor = 2;

var primeFactor = function(input){
	do{
		while (input % maxFactor === 0){
			input /= maxFactor;
		}
		maxFactor++;
	}while(maxFactor < input);

	return maxFactor;
}

for (var n = 2; n <= 20; n++){
	product *= primeFactor(n);
}

console.log("Problem 5 answer is: " + product);


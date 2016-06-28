var squareSum = 0, sumSquare = 0;

for (var i = 1; i <= 100; i++){
	squareSum += i;
	sumSquare += (i * i);
}

squareSum *= squareSum;

console.log("Problem 6 answer is: " + (squareSum - sumSquare));
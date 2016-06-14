var one = 1;
var two = 2;
var nextNum;

//starts with the even sum of the first two numbers
var sum = 2;

while (sum < 4000000){
	nextNum = one + two;
	one = two;
	two = nextNum;

	if (nextNum % 2 === 0){
		sum += nextNum;
	}
}

console.log("Problem 2 answer: " + sum);
<<<<<<< HEAD
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

=======
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

>>>>>>> c1c7aaad20c1a6525b627dd8fdaa9eb016e54eb5
console.log("Problem 2 answer: " + sum);
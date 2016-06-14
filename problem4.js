<<<<<<< HEAD
var max = 10000;
var product;

var ones = function(n){
	return (n - (n / 10 >> 0) * 10);
}

var tens = function(n){
	return ((n - (n / 100 >> 0) * 100)) / 10 >> 0;
}

var huns = function(n){
	return (n - (n / 1000 >> 0) * 1000) / 100 >> 0;
}

var thous = function(n){
	return (n - (n / 10000 >> 0) * 10000) / 1000 >> 0;
}

var tenthous = function(n){
	if (n < 100000){
		return n / 10000 >> 0;
	}
	else return (n - (n / 100000 >> 0) * 100000) / 10000 >> 0;
}

var hundthous = function(n){
	return n / 100000 >> 0;
}

var isPalindrome = function(n){
	if (product < 100000){
		return (tenthous(product) === ones(product) && thous(product) === tens(product));
	}
	else return (hundthous(product) === ones(product) && tenthous(product) === tens(product) && thous(product) === huns(product));

}

for (var a = 100; a <= 999; a++){
	for (var b = 100; b <= 999; b++){
		product = a * b;
		if (isPalindrome(product) && product > max){
				max = product;
		}
	}
}

=======
var max = 10000;
var product;

var ones = function(n){
	return (n - (n / 10 >> 0) * 10);
}

var tens = function(n){
	return ((n - (n / 100 >> 0) * 100)) / 10 >> 0;
}

var huns = function(n){
	return (n - (n / 1000 >> 0) * 1000) / 100 >> 0;
}

var thous = function(n){
	return (n - (n / 10000 >> 0) * 10000) / 1000 >> 0;
}

var tenthous = function(n){
	if (n < 100000){
		return n / 10000 >> 0;
	}
	else return (n - (n / 100000 >> 0) * 100000) / 10000 >> 0;
}

var hundthous = function(n){
	return n / 100000 >> 0;
}

var isPalindrome = function(n){
	if (product < 100000){
		return (tenthous(product) === ones(product) && thous(product) === tens(product));
	}
	else return (hundthous(product) === ones(product) && tenthous(product) === tens(product) && thous(product) === huns(product));

}

for (var a = 100; a <= 999; a++){
	for (var b = 100; b <= 999; b++){
		product = a * b;
		if (isPalindrome(product) && product > max){
				max = product;
		}
	}
}

>>>>>>> c1c7aaad20c1a6525b627dd8fdaa9eb016e54eb5
console.log("Problem 4 answer is: " + max);
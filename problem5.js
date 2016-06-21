//incomplete
var temp;

var lcm = function(a, b){
	while (b % a != 0){
		temp = b;
		b -= (b % a);
		a = temp % a;
	}
}


console.log("Problem 5 answer is: " + product);

//use a vector, checking every odd number's divisibility by each index of the vector while vector.size < 10001
//need to look up javascript vectors before continuing

var primes = [2, 3];

var maxPrime = 3;

while (primes.length < 10001){
	var primeCount = primes.length;
	var isPrime = true;
	
	for (var i = 0; i < primeCount; i++){ //need to check logic on this loop, primes.length is increasing which means the for loop never exits
		if (maxPrime % primes[i] === 0){
			isPrime = false;
			break;
		}
	}

	if (isPrime){
		//console.log(maxPrime);
		primes.push(maxPrime);
	}

	maxPrime += 2;
}

console.log("Problem 7 answer is: " + primes[10000]);
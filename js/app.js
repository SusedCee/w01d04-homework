console.log("HW");


//VERBAL QUESTIONS

//1. What is the difference between a parameter and an argument?
   //A parameter is a variable listed that is part of the function. (inside)
   //An argument is a variable that is given to the function when told to. (out)


//2. Within a function, what is the difference between return and console.log?
   //A function stores the data in the memory
   //console.log only writes it into the console. It's also a cool tool to check work.


//3. What are the implications of the ability of a function to return a value?
	// Return functions cannot be checked in the console and you cannot write code 
	//after the return function.

//PALINDROME AGAIN.
//Write a function checkPalindrome that accepts a single argument, a string. Yes, 
//you've done it before, but do it again. Later in this assignment we're gonna beef 
//up our palindrome function some. See if you can do it without looking back at your 
//previous answer. The function should return true if the string is a palindrome, 
//false if not. Make sure your function will give the correct answer for words with 
//capital letters.

// const checkPalindrome = (string) => {   //
// 	const word = string;
// 	const split = string.split("");
// 	const reverse = split.reverse("");
// 	const join = reverse.join();
// 		if (word === join) {
// 			return true;
// 			} else {
// 				return false;
// 			}
// 		}

// console.log(checkPalindrome("radar"));
// console.log(checkPalindrome("borscht"));



//DIGIT SUM
//Write a function sumDigits that accepts a number and returns the sum of its digits.

function sumDigits(stuff) {
	const split = (""+stuff).split("");
	const num = 0;
	for (i = 0; i <split.length; i++) {
		num += Math.max(split[i])
	}
	return num;
}

console.log(sumDigits(567));


//PYTHAGORAS
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns 
// the solution for sideC using the Pythagorean theorem.

// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript

// function calculateSide(sideA, sideB){
//   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }



// console.log(calculateSide(8, 6)); // should equal 10



//SUM ARRAY
//Write a function sumArray that takes an array as an argument. The array should 
//contain numbers. The function should return the sum of the numbers in the array.

// function  sumArray (amount){
// 	var total = 0;
// 	for (i = 0; i < amount.length; ++i) {
// 		total += amount[i];
// 	} 
// 	return total;

// }

// console.log(sumArray([1, 2, 3, 4, 5, 6]));  //=> 21





//PRIME NUMBERS
//Step 1
//Write a function called checkPrime that will test whether a number is Prime. 
//The function will return true (Boolean) if Prime, false if not. Hint: Check 
//every number up to the square root. To do this, try a for loop.

//  function checkPrime (number){
//  	for(var i = 2; i < number; i++) {
//  		if(number % i === 0) {
//  			return false;
//  		}
//  	}
//    return number >1;
// }

// console.log(checkPrime(17));
// console.log(checkPrime(6));
// console.log(checkPrime(23));


//Step 2
// Write another function called printPrimes that will print (console log) all the
// Primes up to an arbitrary limit. For example, if you invoke your function with 
// printPrimes(97), it will print all the Prime numbers up to and including 97. 
// This function can call on the previous checkPrime function.


// function printPrimes (num){

// 	var primeFactors = [];
// 	while (num % 2 === 0) {
// 		primeFactors.push(2);
// 		num =num / 2;
// 	}

// 	var sqrtNum = Math.sqrt(num);
// 	for (var i = 3; i <= sqrtNum; i++) {
// 		while (num % i ===0) {
// 			primeFactors.push(i);
// 			num = num / i;
// 		}
// 	}

// 	if (num > 2) {
// 		primeFactors.push(num);
// 	}
// 	return primeFactors;
// }


// console.log(printPrimes(7));
// console.log(printPrimes(5));
// console.log(printPrimes(12));

































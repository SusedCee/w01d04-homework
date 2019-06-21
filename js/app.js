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
// //	const res = str.toLowerCase();       //turn the string into lower case
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
// function sumDigits(num) {
// 	var numString = num.toString();
// 	var starting = 0;
// 	var sum = 0;
// 	if (num < 0){
// 		sum -=Number(numString[1]);
// 		starting += 2; 
// 	}
// 	for (var i = string; i < numString.length; i++) {
// 		sum += Number(numString[i]);
// 	}
// 	return sum;
// }
// console.log(sumDigits(42)); 




// 	if(Number.isInteger(num) === false){
// 		return sum;
// 	}
// 	var str = num.toString();
// 	for(i = 0; i <= str.length - 1; i++){
// 		sum += +str[i];
// 	}
// 	return sum;
// }

// console.log(sumDigits(42)); // should equal 6




//PYTHAGORAS
// Write a function calculateSide that takes two arguments: sideA and sideB, and returns 
// the solution for sideC using the Pythagorean theorem.

// hint: discover the Pythagorean Theorem on a website called google.com
// hint: checkout the Math methods in javascript

// function calculateSide(sideA, sideB){
//   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
// }



// console.log(calculateSide(8, 6)); // should equal 10













































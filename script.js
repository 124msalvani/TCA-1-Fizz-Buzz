let x=1

function fizzbuzz(n) {
	// Write your code here
	while (n>x){

		if (Number.isInteger(x/3) && Number.isInteger(x/5)){
			console.log ("FizzBuzz")
			x++
		}
		else if (Number.isInteger(x/5)){
			console.log("Buzz")
			x++
		}
		else if (Number.isInteger(x/3)){
			console.log("Fizz")
			x++
		}
		else{
			console.log(x)
			x++
		}
	}
		


	if (Number.isInteger(n/3) && Number.isInteger(n/5)){
		console.log("FizzBuzz")
	}
	else if (Number.isInteger(n/5)){
		console.log("Buzz")

	}
	else if (Number.isInteger(n/3)){
		console.log("Fizz")

	}
	else{
		console.log(n)
	}
	
	



	// Leave the console.log below at the bottom of the function
	console.log("-------------");
	x=1
}






fizzbuzz(16);
fizzbuzz(25);


// Instructions  
// FizzBuzz

// Write a `fizzbuzz()` function that takes in a number, `n`, and prints out the numbers from 1 to `n`. 

// For **multiples of three**, replace the number with the word `"Fizz"`, and for the **multiples of five**, replace the number with the word `"Buzz"`. 

// For numbers that are **multiples of both three and five**, use `"FizzBuzz"` (capitalization matters).

// For example, `fizzbuzz(16)` should print:
// `1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16`


// *You don't need to have them separated by commas; you can have each number (or word) get printed on it's own line*
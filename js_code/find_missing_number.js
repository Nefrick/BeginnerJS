Задача: find_missing_number
Given a sequence of integers from 1 to N in a random order. One of the numbers is missing (the others are found exactly once). N is not known beforehand. Determine the missing number.

Example: 1 == solution([2,3,4,5])

// BEGIN implement function `solution` here 

function solution (arr) {
	var myArr = arr.sort();
	var sum = myArr.reduce(function(sum , current){
			return sum + current;
	}, 0);
	return ((arr.length) +1) * ((arr.length) +2) /2 - sum;
}
// END

//Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as args
//The f(x) should return a boolean indicating whether or not it is possible to generate the targetSum using the numbers from the arr
//You may use an element of the array as many times as needed
//You may assume that all input numbers are nonnegative.


//-------------------- my attempt ------------------

// const canSum = (targetSum, numbers) => {
//     let solution

//     for(let i = 0; i < numbers.length; i++){
//         for(let k = 0; k < numbers.length + 1; i++){
//             if (targetSum - (numbers[i] + numbers[k]) === 0){
//                 solution = true;
//             } else {
//                 solution = false;
//             }
//         }
//     }

//     return solution;
// }

// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(20, [2, 3, 4, 5, 8, 6]));
// console.log(canSum(50, [0, 1, 10]));
// console.log(canSum(10, [0, 1, 2, 3, 4, 5, 8]));

//while this might have done everything it was supposed to! it ran far longer than it should have ever done.

// ----------- tutorial answer -----------
// const canSum = (targetSum, numbers) => {
//     if (targetSum === 0) return true; //base case stated in txt
//     if (targetSum < 0) return false; //next basecase to avoid negatives, as numbers should always be positive
    
//     for (let num of numbers) { 
//         const remainder = (targetSum - num); //this serves as the branches shown in the tree in txt file
//         if (canSum(remainder, numbers) === true){
//             return true;
//         } //and this takes the remainder and does a callback function using it as the new target variable, meaning it is subtracted from each number available and if it ever reaches 0 it is true.
//     }

//     return false;

// };

// ------------ memoization ----------------

const canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    
    for (let num of numbers) { 
        const remainder = (targetSum - num);
        if (canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true;
            return true;
        } 
    }

    memo[targetSum] = false;
    return false;
}

console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(8, [2, 1])); //false
console.log(canSum(10, [5, 8])); //false
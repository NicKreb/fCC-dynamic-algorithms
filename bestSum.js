const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    
    let shortestCombo = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombo = bestSum(remainder, numbers, memo);
        if (remainderCombo !== null) {
           const combo = [...remainderCombo, num];
           //if the combo is shorter than the current "shortest then update"
           if (shortestCombo === null || combo.length < shortestCombo.length){
            shortestCombo = combo;
           }
        }
    }
    memo[targetSum] = shortestCombo;
    return shortestCombo;
};

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));

// m = targetSum
// n = numbers.length

//brute force complexity = exponential
//time = O(n^m*m)
//space: O(m^2)

//memoized complexity = polynomial
//time: O(m^2 * n)
//space: O(m^2)
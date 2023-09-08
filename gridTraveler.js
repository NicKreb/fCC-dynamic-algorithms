const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;
    // are the args in the memo
    if (key in memo) return memo[key];

    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key];
};

//because there is a comma, we avoid the misunderstanding that lead to what would happen below if it was in the memo
// m = 42
// n = 3

//key = 423 

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18 )) //2333606220

// pre memo code, where the args were purely m & n, while they would pump out the correct answer
// because their were 2 args, and each arg would be linear by itself. The Big O is instead O(2 ^m+n);
// this makes it take a LOT of proccessing time and power to output the answer for incredibly large numbers.

// However, by creating a memo object as a separate arg, putting discovered answers in memo and avoiding repeats..
// this speeds up the process incredibly. And requires much less time and power to output the answer for large numbers!


//with how the problem is laid out, where you can only move down and to the right, then have to find as many solutions as possible
//we know that if m was 4, and n was 3. Then possible moves for each would look like this:
// m: {0, 1, 2, 3, 4} | n: {0, 1, 2, 3}
//meaning m can only go 4 moves, and n can only go 3. So much like finding the area to a square, there are m * n possible moves!

//brute force method was exponential. O( 2 ^ n*m)

// the new time complexity of this is now O(m*n);

//it helps to think about our cursive prob;ems as a tree;
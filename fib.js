const fib = (n) => {

    const table = Array(n + 1).fill(0); //this allows the last index of array to be equal to n
    table[1] = 1;
    for (let i=0; i < n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
}

console.log(fib(6)); //8
console.log(fib(9)); //34

//n:       0, 1, 2, 3, 4, 5, 6, 7,  8,  9, ...
//fib(n):  0, 1, 1, 2, 3, 5, 8, 13, 21, 34....

//this is useful for most problems, because it initializes the table upfront
//for any data we work with. And then iterates through it accordingly
const canSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    // if (targetSum === 0) return true;
    // if (targetSum < 0) return false;
    for (let i = 0; i <= targetSum; i++){ //if you do table.length it creates an infinite loop. using targetSum limits the iteration to the target.
        if(table[i] === true){
            for(let num of numbers){
                table[i + num] = true;
            }
        }
    }
return table[targetSum];
}

console.log(canSum(7, [5, 3, 4, 7])); //true
console.log(canSum(8, [2, 1])); //true
console.log(canSum(10, [5, 8])); //true
console.log(canSum(10, [3, 8])); //false
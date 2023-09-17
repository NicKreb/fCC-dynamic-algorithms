const bestSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++){
        if (table[i] !== null){
            for (let num of numbers){
                const combo = [...table[i], num];
                //if current combo is shorter than what is stored
                if (!table[i + num] || table[i + num].length > combo.length){
                    //if table[i + num] is not true, or table.length is larger, table is now combo.
                    table[i + num] = combo;
                }
            }
        }
    }
    return table[targetSum];
}

console.log(bestSum(7, [5, 3, 4, 7])); //[7]
console.log(bestSum(8, [2, 1])); //[2, 2, 2, 2]
console.log(bestSum(10, [5, 8])); //[5, 5]
console.log(bestSum(10, [3, 8])); //null
const canConstruct = (targetString, wordBank) => {
    const table = Array(targetString.length + 1).fill(false);
    table[0] = true;

    for (i = 0; i <= targetString.length; i++){
        if (table[i] === true){
            for(let word of wordBank){
                if (targetString.slice(i, i + word.length) === word){
                 table[i + word.length] = true;  
                }
            }
        }
    }

    return table[targetString.length];
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //false
console.log(canConstruct("", ["cat", "dog", "mouse"])); //true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e", 
    "ee", 
    "eee", 
    "eeee", 
    "eeeee"
])); //false
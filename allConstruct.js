const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === ""){ return [[]]};

    const result = [];
    
    for (let word of wordBank) {
        if (target.indexOf(word) === 0){
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [word, ...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return memo[target];
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purp'])); //[ [ purp, le ], [ p, ur, p, le ] ]
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])); //[ [ abc, def ], [ ab, c, def ], [ ab, cd, ef ], [ abcd, ef ] ]
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // null or []
console.log(allConstruct("hello", ["cat", "dog", "mouse"])); // null or []
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])); //[]

//m = target.length
//n = wordBank.length

//time = O(n^m) exponential *this is the best it can be
//space = O(m) the height of the recurrsion tree
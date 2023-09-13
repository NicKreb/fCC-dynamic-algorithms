const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) {
        return memo[target];
    }
    if (target === "") { 
        return true; 
    }

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true){
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

//boolean response should be true/false

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //false
console.log(canConstruct("", ["cat", "dog", "mouse"])); //true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])); //false

//n = wordBank.length
//m = target.length

//brute force
//time is O(n^m * m)
//space is O(m^2)

//memoized
//time is O(n * m^2)
//space is O(m^2)

const countConstruct = (target, wordBank, memo = {}) => {
if (target in memo) return memo[target];
if (target === "") {return 1};

let total = 0;

for ( let word of wordBank) {
    if(target.indexOf(word) === 0){
       const numWays = countConstruct(target.slice(word.length), wordBank, memo);
       total += numWays;
    }
}

memo[target] = total;
return memo[target];

}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); //0 
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])); //0

//n = wordBank.length
//m = target.length

//brute force
//time = O(n^m*m)
//space = O(m^2)

//memo
//O(n*m^2) time
//O(m^2) space
// non-constructible change✰ 

// given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. the given coins can have any positive integer value and aren't necessarily unique (if, you can have multiple coins of the same value). for example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. if you're given no coins, the minimum amount of change that you can't create is 1.

// Sample input 
let coins = [5, 7, 1, 1, 2, 3, 22];
// sample Output   
// 20

// O(nlog(n)) Time | O(n) Space 

coins.sort((a, b) => a - b);
let currentChageCreated = 0;

for (let coin of coins) {
    if (coin > currentChageCreated + 1) return currentChageCreated + 1;
    currentChageCreated += coin;
    console.log(currentChageCreated + 1);
}
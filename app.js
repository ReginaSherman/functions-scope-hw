// Part 1: Verbal Questions

// 1. A parameter is essentially a placeholder for a value. 
    // The argument are the actual values that you want to pass in a function.

// 2. Return tells the function want to do. Console.log is just a way
    // for us to visibly see what we're having the function do.

// 3. The variable either has to be in the global scope or the local scope of the particular funtion.

// Part 2: Calculate the Cube

function calculateCube(number) {
    return number ** 3
};
calculateCube(5);
console.log(calculateCube(5));

// Part 3: Is a Vowel?

function isAVowel(p1) {
    let letter = p1.toLowerCase();
    if (letter === "a") {
        return "true"
    } else if (letter === "e") {
        return "true"
    } else if (letter === "i") {
        return "true" 
    } else if (letter === "o") {
        return "true"
    } else if (letter === "u") {
        return "true"
    } else {
        return "false"
    }
}
isAVowel("a");
console.log(isAVowel("a"));

// Part 4: Get Two Lengths

function getTwoLengths(str1, str2) {
    return [str1.length, str2.length]
}
getTwoLengths("Hank", "Hippopopalous");
console.log(getTwoLengths("Hank", "Hippopopalous"));

// Part 5: Sum Array

function sumArray(array) {
    let sum = 0;
    for(let i =0; i < array.length; i++) {
        sum += array [i];   
    };
    return sum;
};
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// Part 6: 
function max(num1, num2) {
    if(num1 > num2){
        return num1;
    }
    if(num2 > num1){
        return num2;
    }
    return num1;
}

function maxOfThree(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return num1;
    } 
    if(num2 > num1 && num2 > num3) {
        return num2; 
    }
    if(num3 > num1 && num3 > num2) {
        return num3; 
    }
    return num1;
}

function isVowel(char){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if(vowels.includes(char)) return true;
    return false;
}

function sum(nums) {
    return nums.reduce((a,b) => a+b, 0);
}

function multiply(nums) {
    return nums.reduce((a,b) => a*b, 1);
}

function reverse(string) {
    return string.split("").reverse().join("");
}

function findLongestWord(words) {
    let longest = words[0];
    for(let i=1; i<words.length; i++) {
        if(words[i].length > longest.length) {longest = words[i]};
    }
    return longest;
}

function filterLongWords(words, count) {
    const longWords = [];
    for(let i=0; i<words.length; i++){
        if(words[i].length > count){
            longWords.push(words[i]);
        }
    }
    return longWords;
}

const multiplyBy10 = (nums) => nums.map(num => num * 10);
const equalTo3 = (nums) => nums.filter(num => num === 3);
const product = (nums) => nums.reduce((a, b) => { return a*b }, 1);

function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}

console.log("Expected output of max(10,20) is 20  " + myFunctionTest(20, function () {
    return max(10, 20);
}));
console.log("Expected output of maxOfThree(10,15,55) is 55  " + myFunctionTest(55, function () {
    return maxOfThree(10,15,55);
}));
console.log("Expected output of isVowel('c') is false  " + myFunctionTest(false, function () {
    return isVowel('c');
}));
console.log("Expected output of sum([2,5,10]) is 17  " + myFunctionTest(17, function () {
    return sum([2,5,10]);
}));
console.log("Expected output of multiply([2,5,10]) is 100  " + myFunctionTest(100, function () {
    return multiply([2,5,10]);
}));
console.log("Expected output of reverse('basic') is cisab  " + myFunctionTest('cisab', function () {
    return reverse('basic');
}));
console.log("Expected output of findLongestWord(['apple','strawberry','mango']) is strawberry " + myFunctionTest('strawberry', function () {
    return findLongestWord(['apple','strawberry','mango']);
}));
console.log("Expected output of filterLongWords(['apple','strawberry','mango'], 5) is ['strawberry'] " + myFunctionTest(["strawberry"], function () {
    return findLongestWord(['apple','strawberry','mango'], 5);
}));
console.log("Expected output of multiplyBy10([10, 20, 30]) is [100, 200, 300]  " + myFunctionTest([100, 200, 300], function () {
    return multiplyBy10([10, 20, 30]);
}));
console.log("Expected output of equalTo3([3, 9, 3, 12]) is [3,3]  " + myFunctionTest([3,3], function () {
    return equalTo3([3, 9, 3, 12]);
}));
console.log("Expected output of product([2,5,10]) is 100  " + myFunctionTest(100, function () {
    return product([2,5,10]);
}));

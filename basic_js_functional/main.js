function sum(nums) {
    return nums.reduce((a,b) => a+b, 0);
}

function multiply(nums) {
    return nums.reduce((a,b) => a*b, 1);
}

function reverse(string) {
    return string.split("").reverse().join("");
}

function filterLongWords(words, count) {
    const longWords = words.filter(word => word.length > count);
    return longWords;
}

function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}

console.log("Expected output of sum([2,5,10]) is 17  " + myFunctionTest(17, function () {
    return sum([2,5,10]);
}));
console.log("Expected output of multiply([2,5,10]) is 100  " + myFunctionTest(100, function () {
    return multiply([2,5,10]);
}));
console.log("Expected output of reverse('basic') is cisab  " + myFunctionTest('cisab', function () {
    return reverse('basic');
}));

console.log("Expected output of filterLongWords(['apple','strawberry','mango'], 5) is ['strawberry'] " + myFunctionTest(["strawberry"], function () {
    return findLongestWord(['apple','strawberry','mango'], 5);
}));

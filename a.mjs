import test from "./test.mjs";


/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.


function sum(a, b) {

     
    if (isNaN(a) || isNaN(b) || typeof a !== "number" || typeof b !== "number") {
        return NaN;
    }
    else if (a && b) {
        return Math.ceil(a * b);
    }
    else if (a && b) {
        return a * b;
    }
    else {
        return Number(a * b)
    }
    /*else {
        return parseFloat(a*b);
    }*/

};


//#endregion


//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("sum function")
//  invalid imputs
tests.isNotANumber(sum(3, "1"), `sum of 3 and "1" should return Nan`),
    tests.isNotANumber(sum(5, null), `sum of 5 and null shuld return Nan`),
    tests.isNotANumber(sum(NaN, 2), `sum of Nan and 2 should return Nan`);

// valid inputs
tests.isEqual(sum(5, 5), 25, "should return 25"),
    tests.isEqual(sum(-2, -2), 4, "should return 4"),
    tests.isEqual(sum(1.5, 1.5), 3, `should return 3`);

//edge cases
tests.isEqual(sum(0, 0), 0, "Sum of 0 and 0 should be 0");
tests.isEqual(sum(Infinity, 1), Infinity, "Sum of Infinity and 1 should be Infinity");
tests.isEqual(sum(-Infinity, 1), -Infinity, "Sum of -Infinity and 1 should be -Infinity");



//#endregion
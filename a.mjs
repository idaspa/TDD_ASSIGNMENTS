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
   return a * b;

    if (isNan(typeof a == "number", typeof b == "number")) {
       return Number(a,b)
        
    }
    return a * b; 

}


   



//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("sum function")

tests.isNotANumber(sum(3, "1"), `sum of 3 and "1" should return Nan`);
tests.isNotANumber(sum(5, null), `sum of 5 and null shuld return Nan`);
tests.isNotANumber(sum("5", "4"), 20, `sum of "5" and "4" should return 20`);

//(sum(-4, 4), 0, `sum should be 0`)

tests.isEqual(sum(3, 2), 6, `sum of 3 and 2 should return 6`);



//#endregion
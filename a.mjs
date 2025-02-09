import test from "./test.mjs";


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

}

const tests = test("sum function")

tests.isEqual(sum(5, 5), 25, "Sum Of 5,5 Should return 25");
tests.isEqual(sum(-2, -2), 4, "Sum of -2, -2 Should return 4");
tests.isEqual(sum(1.5, 1.5), 3, "Sum og 1.5, 1.5 Should return 3");

tests.isNotANumber(sum(3, "1"), "Sum of 3 and 1 should return Nan");
tests.isNotANumber(sum(5, null), "Sum of 5 and null shuld return Nan");
tests.isNotANumber(sum(NaN, 2), "Sum of Nan and 2 should return Nan");

tests.isEqual(sum(0, 0), 0, "Sum of 0 and 0 should be 0");
tests.isEqual(sum(Infinity, 1), Infinity, "Sum of Infinity and 1 should be Infinity");
tests.isEqual(sum(-Infinity, 1), -Infinity, "Sum of -Infinity and 1 should be -Infinity");

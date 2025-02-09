import test from "./test.mjs";



function guessNumber(target, guess) {
    if (typeof target !== "number" || typeof guess !== "number") { 
        return null;
    }
    if (!Number.isInteger(target) || !Number.isInteger(guess)) { 
        return null;
    }
    if (guess > target) {
        return "Too high";
    }
    if (guess < target) {
        return "Too low";
    }
    else if (guess === target) {
        return "Correct!";
    }

}

const tests = test("guessNumber");

tests.isEqual(guessNumber(10, 5), "Too low", "If target is 10 and guess is 5, return 'Too low.'");
tests.isEqual(guessNumber(10, 15), "Too high", "If target is 10 and guess is 15, return 'Too high.'");
tests.isEqual(guessNumber(10, 10), "Correct!", "If target is 10 and guess is 10, return 'Correct!'");

tests.isEqual(guessNumber(6, "6"), null, "If the guess is in a string return null.");
tests.isEqual(guessNumber(3, 4.2), null, "If a guess is not a integer number return null.");
tests.isEqual(guessNumber("9","8"), null, "If guess || target is a string it should return null")

tests.isEqual(guessNumber(-8, -8), "Correct!", "If target is -8 and guess is -8 it should retun correct");
tests.isEqual(guessNumber(-20, 15), "Too high", "If guess is 15 and target is -20 it should return too high");
tests.isEqual(guessNumber(10, -10), "Too low", "If guess is -10 and target is 10 it should return too low");



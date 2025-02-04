import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe"). uppercase-reduce??
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.
const specialCharacters = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";

function formatName(name) {

    if (typeof name !== "string") {
        return null;
    }

    for (let i = 0; i < specialCharacters.length; i++) { // goes through and checks the string for special-char 
        if (name.includes(specialCharacters[i]) > -1) {     //does  name include spec-char more than 0?
            return null;                                    // if it is true(contains more than 0 spec-char) then return null.
        }
    }

}











//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("formatName");

tests.isEqual(formatName(13), null, "Since 13 is not a string it should now return null");
tests.isEqual(formatName("j¤ne d!o"), null, " A string that includes special characters should now return null");
tests.isEqual(formatName("jane d%e"), null, " A string that includes special characters should now return null");

tests.isEqual(formatName("Jane doe"), "Jane Doe", " `Jane doe should now return `Jane Doe` ");

tests.isEqual(formatName("  jane  doe  "), "jane doe", "`  jane  doe  `, Should now return `jane doe`");

tests.isEqual(formatName(""), "", " The empty string will now return an empty string ");
//tests.isEqual(formatName("John doe"),`John Doe`, " the name `John doe`, should now be `John Doe` after formatting"); 
//#endregion
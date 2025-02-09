import test from "./test.mjs";


function formatName(name) {
    if (typeof name !== "string") {
        return null;
    }
    const specialCharacters = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";

    for (let i = 0; i < specialCharacters.length; i++) {
        if (name.includes(specialCharacters[i])) {
            return null;
        }
    }

    const nameToTrim = name.trim();
    let emptyString = "";


    if (nameToTrim === emptyString) {
        return emptyString;
    }
    return nameToTrim
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

}

const tests = test("formatName");

tests.isEqual(formatName("Jane doe"), "Jane Doe", " Jane doe should now return Jane Doe");
tests.isEqual(formatName("jane Doe"), "Jane Doe", " jane Doe should now return Jane Doe");
tests.isEqual(formatName("jane doe"), "Jane Doe", " jane doe should now return Jane Doe");

tests.isEqual(formatName([1]), null, " The array should now return null");
tests.isEqual(formatName(13), null, " Since 13 is not a string it should now return null");
tests.isEqual(formatName("jane d%e"), null, " A string that includes special characters should now return null");

tests.isEqual(formatName(" jane  doe "), "Jane Doe", " jane  doe Should now return Jane Doe");
tests.isEqual(formatName(""), "", " The empty string should now return an empty string ");
tests.isEqual(formatName("jane      doe"), "Jane Doe", "jane     doe sjould now return Jane Doe");

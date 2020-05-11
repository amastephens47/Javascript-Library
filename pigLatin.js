/*
Pig Latin:
Create a function that takes in strings
In the function, translate a phrase into pig latin and print both the original and pig latin version to the console.
If able to do so, return the value into another variable and print that variable
What is Pig Latin?
    * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
    * If the word begins with a vowel, simply add an 'ay' at the end of the word
*/
​
// Pig -> IgPay  (testing one word, testing the consonant case)
// Latin -> Atinlay (testing one word, testing the vowel case)
// Pig Latin -> IgPay Atinlay  (tests a sentence with both consonants and vowels)

let firstTest = "Hello"; //expecting "elloHay"
const vowels = ["a", "e", "i", "o", "u"];

const pigLatin = (toTranslate) => {
    // check whether the first character is a vowel or a consonant
        // Vowel  ->
            // add "ay" to the end of the word
            // -fin
        // Consonant ->
        // remove from the first character to the first vowel (iteration)
        // take those letters, in order, and place them at the end of the word
        // add "ay" to the end of the word
        // -fin
        // return the translated word
        let translated;
        toTransLate = toTransLate.toLowerCase();
        console.log(toTransLate);
        if(vowels.includes(toTransLate[0])) {
            translated = toTransLate + "ay";
        } else {
            for(let i = 0; i < toTranslate.length; i++) {
                if (vowels.includes(totTranslate[i])) {
                  
                let chunk = toTranslate.slice(0, i - 1);
                console.log(chunk, toTranslate);

            }
        }
        return translated;
};



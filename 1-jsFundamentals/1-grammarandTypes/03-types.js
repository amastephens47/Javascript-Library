// Boolean
let on = true; 
console.log(on);

let off = false;

// Null - null is an empty value; think of it as an empty container.  There's nothing in it but it still exists as a space to fill

let empty = null;
console.log(empty);

// Undefined - default value when a variable is not initialized
let undef = undefined;
let correct; 

console.log(undef, correct);

// Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded); 

let notQuite= 0.2 + 0.1;
console.log(notQuite);

let aNumber = Number("123");
console.log(typeof aNumber);

// Strings - strings are data types used to represent text and are either wrapped in single quotes(''), double quotes(""), or string interpalation(``)

let stringOne = 'single quotes'; 
let stringTwo = "double quotes";
let stringThree = `backticks`;

console.log(stringOne, stringTwo, stringThree);

let first = 1050 + 100;
let second = "1050" + "100";
console.log(typeof first);
console.log(typeof second);

let third = 1050 + "100";
console.log(third);

// Objects - are used to store many values instead of a singular one

let frodo = {
    race: "hobbit",
    rings: 1,
    cloak: true
}
console.log(frodo);
console.log(typeof frodo);

// Arrays - are containers that hold lists of items
/*
let list = [      "item1",       "item2",      "item3"];
  (1)     (2)         (3)

  1 - name of array
  2 - arrays are denoted by square brackets
  3 - notice each value is separated by a comma
*/
//              (1)     (2)  (3)

let burritos = ["large", 4, true];
console.log(burritos);
console.log(typeof burritos);

let burritos = {
    1: "large",
    2: 4,
    3: true
}

let firstName = "Amanda"; 
let lastName = "Stephens";
let houseNumber = "443";
let street = "Leafy Branch Trail";
let city = "Carmel";
let state = "IN";
let zipcode = "46032";



console.log(`${firstName} ${lastName} ${houseNumber} ${street}, ${city}, ${state} ${zipcode}`);

console.log(firstName + " " + lastName);
console.log(houseNumber + " " + street + " " + city + " " + state + " " + zipcode);

let myName = "Amanda";

console.log(myName.toUpperCase());
console.log(myName.length);

let home = "My home is greenwood";
console.log(home.includes("greenwood"));

let sent = 'This sentence will be split into individual parts ';
console.log(sent.split(" "));

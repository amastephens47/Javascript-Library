//  variable        fat arrow
    let hi     =    () => {
        console.log('hi');
    }

    // arrow functions were introduced in ES6. They are basically a more concise way to write function expressions--not declarations
    // this means arrow functions do not get hoisted

    // BLOCK BODY
    let hi = () => {
        console.log('hi');
        // lots of code goes here

        // return goes here
    }
    // NOTE: block body arrow functions must have a return (if you want to get back information) in the body of the function
    // return must be in between the curly braces

    // CONCISE BODY
    let hi = () => console.log('hi');
// NOTE: concise body arrow functions return by default; they automatically give back the information

let greeting = name => {
    console.log(`Greetings, ${name}`)
}

greeting('Jerome')

// if you have more than one parameter you MUST put parameters in parentheses
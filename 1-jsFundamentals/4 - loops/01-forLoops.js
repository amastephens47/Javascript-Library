let i = 7;

//    (1)    (2)   (3)
for(i = 0; i <= 10; i++){
    console.log(i);
}

console.log(i)
/*
1- initial expression - runs once before the loop starts
2 - condition - loop runs until the condition evaluates to false
3 - increment expression - run once after each iteration of the loop
*/

for (x = 0; x <= 20; x = x + 2) {
    console.log(x);
}

for (x = 0; x <= 20; x = x += 2) {
    console.log(x);
}

for (x = 10; x >= 0; x = x --){
    console.log(x);
}

for (x = 0; x >= -24; x = x -= 2) {
    console.log(x);
}

let name = "Amanda";

for (let i = 0; i < name.length; i++){
    console.log(name[i]);
}

let sum = 0;

for (let i = 1; i <= 50; i++){
    sum += i
}
console.log(sum);

for ( var numbers = 1; numbers <= 100; numbers++) { 
    
    if (numbers % 15 === 0 ) {  
        console.log("FizzBuzz") }
    else if (numbers % 5 === 0) { 
        console.log("Buzz") }
    else if (numbers % 3 === 0 ) { 
        console.log("Fizz") }
    else {
        console.log(numbers) } 
    
    }


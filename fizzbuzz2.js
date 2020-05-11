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

let fizzBuzz = () => {
    for(x = 0; x <= 100; x++){
        if(x % 15 === 0){
            console.log("Fizz Buzz");
        } else if (x % 3 === 0){
            console.log("Fizz");
        } else if (x % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(x);
        }
    }
}
fizzBuzz();
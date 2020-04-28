let weather = 65;

if(weather < 70) {
    console.log("Wear a jacket");
} else{
    console.log("No jacket today");
}

let name = "Amanda Stephens";

if(name == "Amanda Stephens") {
    console.log(`Hello my name is ${name}`);
}else {
    console.log("Hello, is your name" + name);
}

let name = 'zAchARy';

if(name[0] === name[0].toUpperCase()) {
    let isUpperCase = name[0] + name.slice(1).toLowerCase();
    console.log(isUpperCase);
} else {
    let notUpperCase = name[0].toUpperCase() + name.slice(1).toLowerCase();
    console.log(notUpperCase);
}

if(name[0] === name[0].toUpperCase()) {
    console.log(name);
} else {
    console.log("hey, the string isn't written correctly")
}

let age=22;
if (age >= 25) {
    console.log("You can rent a car!");
  } else if (age >= 21) {
    console.log("You can drink!");
      } else if (age >= 18) {
        console.log("You can vote!");
          } else {
    console.log("Sorry, you're too young to do anything");
  }
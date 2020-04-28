/*
falsy values:
1. false
2. 0
3. "", '', ``
4. null
5. undefined/undeclared
6. NaN (not a number)
*/


let isOn = true;
if(isOn) {
    console.log("The light in on");
}

if(isOn == false) {
    console.log("the light is off");
}

let weather = 60;
if(weather < 70) {
    console.log("Wear a jacket!");
}
// let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(long.length);

// let colors = ["blue" , "green", "yellow", "red", "orange", "purple"];
// console.log(colors.length);

// // console.log(colors.toString());

// //Method 2
// console.log(colors instanceof Array);

// colors.reverse();
// colors.forEach(color => console.log(color));

// //Method 2:
// (colors instanceof Array) ? console.log(colors.reverse()) : console.log("Not a Array");
// colors.forEach(name => console.log(name));

// // Method 3
// if (colors instanceof Array) {
//     let newArr = colors.reverse();
//     newArr.forEach(color => console.log(color));
// } else {
//     console.log("Not an array");
// }


let colors = ["blue" , "green", "yellow", "red", "orange", "purple"];

colors.forEach(color => console.log(color[0].toUpperCase() + color.slice(1).toLowerCase()));
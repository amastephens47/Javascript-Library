let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// for (let i = 0; i < food.length; i++) {
//     console.log(food[i]);
// }

food.forEach(foodItem => console.log( foodItem));

let movies = ["The Avengers", "Star Wars", "Robocop", "Alien"];

movies.forEach(movieTitle => console.log(movieTitle));

movies.push("Terminator");
 console.log(movies);

movies.splice(5, 1, "The Rise of Skywalker");
console.log(movies);

movies.forEach((movie, i) => console.log(i, movie));


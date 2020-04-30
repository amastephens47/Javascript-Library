let food = ["Pecan pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

// for(let foodItem of food){
    // console.log(foodItem);
// }

food.push("Pizza");
 console.log(food);

 food.splice(1, 4, "Tacos");
 console.log(food);

let removedFood = food.pop()
console.log(removedFood);

food.unshift("Burritos");
console.log(food);
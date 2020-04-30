let student = {
    name: "Peter",
    awesome: true,
    degree: "Javascript",
    week: 1
}

for(let item in student){
    console.log(item);
    console.log(student[item])
}

let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];

for (let cat in catArray){
    console.log(catArray[cat]);
}

let name = "dOnOvAn";
let capName;

for (let l in name){
    if (l == 0) {
        capName = name[l].toUpperCase();
    } else {
        capName += name[l].toLowerCase();
    }
}

console.log(capName);


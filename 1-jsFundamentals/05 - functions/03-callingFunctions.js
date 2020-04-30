function hi() {
    console.log('HI');
}

hi();

function ten() {
    for (let i = 0; i <= 10; i ++){
        console.log(i);
    }
}
ten()

let arr = ['This', 'is', 'really', 'cool'];

function call() {
    for(let item of arr){
        console.log(item);
    }
}
call();
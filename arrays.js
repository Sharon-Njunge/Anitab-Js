let fruits = ['Mango', 'Banana', 'Orange'];


let arr = new Array(20,30);

console.log({fruits});
console.log({arr});

console.log('fruit', fruits[1]);

fruits[2] = 'Kiwi';
console.log({fruits});

console.log('last item', fruits[fruits.length - 1]);
let sliceFruit = fruits.slice(-1);
console.log({sliceFruit});

let addEnd = fruits.push('pawpaw');
console.log({fruits});

let addStart = fruits.unshift('pineapple');
console.log({fruits});

let removeEnd = fruits.pop();
console.log({fruits});

let removeStart = fruits.shift();
console.log({fruits});

let items = [20,30,40,50,60];
let add = items.reduce((acc, curr)=> acc + curr);
console.log({add});


let multiply = items.map(item => item * 2);
console.log({multiply});

let square = []
items.forEach(item => {
    const multiply =  item * item;
    console.log({multiply});
    square.push(multiply)
});
console.log({square});

const myPets = ["Cow", "Bird","Snake", "Dog"];
let newPets = myPets.toString();
console.log({newPets});

const arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let b = arr3.sort();
console.log({b});



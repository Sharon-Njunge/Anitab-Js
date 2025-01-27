const cup = {
    color:'red',
    shape:'circular',
    weight:'50 grams',
    size:'medium',
    description:{
        drinkType:'tea',
        temperature:'hot'
    },
    drink:function(){
        console.log('use me a drink');
        console.log(`The main purpose if this cup is to drink ${this.description.temperature} ${this.description.drinkType}`);
    }


};
console.log({color: cup.color});
console.log('size', cup['size']);
console.log('temperature', cup.description.temperature);

// Adding properties in the objects
cup.material = 'cerramic';
console.log({cup});

cup.color = 'green';
console.log({cup});

// Deleting a property
delete cup.material;

console.log({cup});
// When you have a function inside an object
cup.drink();

// Getting the keys
const keys = Object.keys(cup);
console.log({keys});

// Getting the values
const values = Object.values(cup);
console.log({values});

 Object.keys(cup).forEach(item=>{
    console.log({key:item, values:cup[item]});
 })


// function add(num1, num2){
//     const sum = num1+num2;

//       console.log({console:  sum});
//     return{return:sum};
//  }
// console.log(add(2,3));
// add(4,5);

// // Fuction Expression

// const subtract = function(num1, num2){
//     console.log(num1 - num2);
// }
// subtract(20, 10);

// // Arrow Functions

// const multiply = (num1, num2) => console.log(num1 * num2);
// multiply(5,6);

// //IIFEs Functions they are called immediately after being written
// (function(){
//     console.log("Hello");
// })();

// function change(){
//     newArra = []
//     arra = ["Sharon", "Brian", "Belinda", "MaryAnn"]

//     arra.forEach(x =>{
//         if(x[0]=="n"||x[0]=="L"){
//         let newWord = x.split("").sort().join("")
//         newArra.push(newWord)
      
//         }
//     })
//     console.log(newArra);
// }
// change()


// function sortedArray(arr){
//     let newArr = arr.sort();
//     console.log({newArr});
//     let reverseArr = newArr.reverse();
//     return{reverseArr}, {newArr}
// }
// console.log(sortedArray(["Burundi", "Kampala", "Kigali", "Nairobi"]));

// function check(number){
//     number.forEach(i=>{ 
//         if(i>0){
//  console.log('positive')
//  return 'positive'
//         }else {
//             console.log('negative')
//             return 'positive'
//         }
//             if (i==0)
//             console.log('zero')
//             return 'zero'
//         })
    
        
//       }
    

// check( [1,2,-3,4,-5,6,-7,8,0])

// function sortedObjects(){
//     let arrEmployees = [
//         {name:"Racheal", id:"efff408", salary:50000},
//         {name:"Sharon", id:"eddd356", salary:70000},
//         {name:"Belinda", id:"hhhh890", salary:90000}
//     ]
//     console.log(arrEmployees.sort((b,a) =>a.salary-b.salary))
// }
// sortedObjects()

// // function employee(id, name, salary){
    
// // }

// function arrange(nums){
//     nums.forEach(i =>{
//         console.log(i*2)
//     }

//     )

// }
// arrange([4,5,6,7,9,0,8])

//  function multiply(num){
//    let newar = num.slice(0,4)
//     let newar2 =num.slice(-2)
//     newar.forEach(i=>{
//         console.log(i*8)
//     })
//     newar2.forEach(i=>{
//         console.log(i+5)
//     })
// }
// multiply([10,20,40,30,50,55,12,9])

// //Write a program that takes in an array of numbers and consoles the first four item multiplied by itself and the last two added by 10.Return the
// //new array with new values.

// function numSquares(numbers){
//     numbers.forEach((number,index)=>{
//         if (index < 4) {
//             numbers[index]=number*number      
//         }
//         else if (index >= numbers.lenght-2) {
//             numbers[index]=number+5
            
//         }
//     });

//     console.log(numbers);
// }
//     numSquares([3,4,5,6,7,8,9,1])

    

// //Write a program that takes in the following array and uses a while loop to iterate and break when the item is equal to the fourth index 
// // //let arrNum = [1,2,3,4,5,6,7,8,9]
// const breakAtFourth = (arrNum) =>{
//     let i = 0
//     while(i<arrNum.length){
//         if(i==4){
//             break;
//         }
//     }
//     return arrNum
// }
// let arrNum = [1,2,3,4,5,6,7,8,9]
// console.log(arrNum);
// breakAtFourth()


// // Write a function that takes in an array of strings and use a continue statement when the item is at the second index.
// // let fruits = ["apple", "plum", "banana", "strawberries", "kiwi" ]
// const desertArr = (fruits) =>{
//     for(let i= 0; i< fruits.length; i++){
//         if(i===2){
//             continue;
//         }
        
//     }
//     return fruits
// }
// let fruits = ["apple", "plum", "banana", "strawberries", "kiwi"]
// console.log(stringArr(fruits));

// // Write a function that accepts an array of strings and console.logs each element using a for loop.
// function loopArray(){
//     stringArr.forEach(element =>{
//         console.log(element);
//     });

// }
// let stringArr = ["num1", "num2", "num3", "num4"]
// loopArray();

// // Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string.

// function findAllTotal(arr){
//     let newArr = []
//     let allNums = arr.map(i=> i+i && i-i && i*i && i/i)

//     // return  allNums
//     newArr.push(allNums)
//     console.log(newArr);
// }
// findAllTotal()

// function mosFrequentChar(word){
// let charCount={};
// for (let char of word){
//     if (charCount[char]){
//         charCount[char]++;
//     }else{
//         charCount[char]=1
//     }
//     }
//     return Object.keys(charCount).reduce((a,b)=>charCount[a]>charCount[b]?a:b);
// }
// console.log(mosFrequentChar("Hello world"))


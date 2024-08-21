let  height  =  180;
let  anotherHeight  =  height;
let  weight;
console.log('height');  //  ->  180
console.log('anotherHeight');  //  ->  180
weight  =  70;    
console.log('weight');  //  ->  70


"use strict"; // -> used to follow instructions as it is according to modern JavaScript standards
   
height = 180; // -> Uncaught ReferenceError: height is not defined
console.log('height');

const greeting = ("Hello!");
greeting = "Hi!"; // -> Uncaught TypeError: Assignment to constant variable.
console.log('greeting')


//-> program block.

let  counter;
console.log('counter');  //  ->  undefined
{
         counter  =  1;
         console.log('counter');  //  ->  1
}
counter  =  counter  +  1;
console.log('counter');  //  ->  2


//-> let and const outside a block is global 
//-> while inside a block it is locally recognised inside the block
let  height =  180;
{
         let  weight  =  70;
         console.log('height');  //  ->  180
         console.log('weight');  //  ->  70	
}
console.log('height');  //  ->  180
console.log('weight');  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

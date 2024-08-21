let  year  =  1990;
console.log(typeof  year);  //  ->  number
console.log(typeof  1991);  //  ->  number
   
let  name  =  "Alice";
console.log(typeof  name1);  //  ->  string
console.log(typeof  "Bob");  //  ->  string
   
let  typeOfYear  =  typeof  year;
console.log(typeOfYear);  //  ->  number
console.log(typeof  typeOfYear);  //  ->  string


let  isDataValid  =  true;
let  isStringTooLong  =  false;
let  isGameOver  =  false;
continueLoop  =  true;
   
console.log(false);  //  ->  false
console.log(typeof  false);  //  ->  boolean
console.log(isDataValid);  //  ->  true
console.log(typeof  isDataValid);  //  ->  boolean


const  year1  =  1991;
let  delayInSeconds  =  0.00016;
let  area  =  (16  *  3.14);
let  halfArea  =  area  /  2;
   
console.log(year1);  //  ->  1991;
console.log(typeof  year1);  //  ->  number;


let  aa  =  10;  //  decimal  -  default  
let  bb  =  0x10;  //  hexadecimal  
let  c  =  0o10;  //  octal  
let  d  =  0b10;  //  binary  
   
console.log(aa);  //  ->  10  
console.log(bb);  //  ->  16  
console.log(c);  //  ->  8  
console.log(d);  //  ->  2  
   
let  x  =  9e3;
let  y  =  123e-5;
console.log(x);  //  ->  9000
console.log(y);  //  ->  0.00123

let  a  =  1  /  0;
let  b  =  -Infinity;
   
console.log(a);  //  ->  Infinity
console.log(b);  //  ->  -Infinity
console.log(typeof  a);  //  ->  number
console.log(typeof  b);  //  ->  number
   
let  s  =  "it's  definitely  not  a  number";
let  n  =  s  *  10;
console.log(n);  //  ->  NaN
console.log(typeof  n);  //  ->  number


let  big  =  1234567890000000000000n;
let  big2  =  1n;
   
console.log(big);  //  ->  1234567890000000000000n
console.log(typeof  big);  //  ->  bigint
   
console.log(big2);  //  ->  1n
console.log(7n  /  4n);  //  ->  1n


//let  big3  =  1000n  +  20;  
//  ->  Uncaught  TypeError:  Cannot  mix  BigInt  and  other  types,  use  explicit  conversions

let  country  =  "Malawi";
let  continent  =  'Africa';
   
console.log(country);  //  ->  Malawi
console.log(typeof  country);  //  ->  string
console.log(continent);  //  ->  Africa
console.log(typeof  continent);  //  ->  string

let  message1  =  "The  vessel  'Mars'  called  at  the  port.";
let  message2  =  'Cyclone  "Cilida"  to  pass  close  to  Mauritius.';
   
console.log(message1);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message2);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.

let  message11  =  'The  vessel  \'Mars\'  called  at  the  port.';
let  message22  =  "Cyclone  \"Cilida\"  to  pass  close  to  Mauritius.";
   
console.log(message11);  //  ->  The  vessel  'Mars'  called  at  the  port.
console.log(message22);  //  ->  Cyclone  "Cilida"  to  pass  close  to  Mauritius.
   
let  path  =  "C:\\Windows";
console.log(path);  //  ->  C:\Windows


let  pathh  =  "C:\\Windows"  -  "Windows";
console.log(pathh);  //  ->  NaN
   
let  test  =  "100"  -  "10";   // This is seen as a minus operator
console.log(test);  //  ->  90
console.log(typeof  test);  //  ->  number


let  patth  =  "C:\\"  +  "Windows";
console.log(patth);  //  ->  C:\Windows
   
let  testt  =  "100"  +  "10";
console.log(testt);  //  ->  10010   // This is seen as concatination of strings and not addition of numbers
console.log(typeof  testt);  //  ->  string

//string interpolation
let  countrry  =  "Malawi";
let  contineent  =  "Africa";
   
let  sentence  =  `  ${countrry}  is  located  in  ${contineent}.`;
console.log(sentence);  //  ->  Malawi  is  located  in  Africa.




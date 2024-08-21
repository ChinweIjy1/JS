//-> QUIZ 1
console.log('Chinwe Ijeoma');
console.log('1987');
console.log('Chinwe Ijeoma (1987)');
console.log('Chinwe' , 'Ijeoma' , '(1987)');
console.log('Chinwe' + 'Ijeoma' + '(1987)');


// QUIZ 2 there are many possible and correct variable names
//Let's play florist. Declare six variables, remembering to name them according to their purpose:

//the price of a single rose (8) and the number of roses you have (70)
//the price of a single lily (10) and the number of lilies you have (50)
//the price of a single tulip (2) and the number of tulips you have (120)
//Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price. 
//Insert the corresponding values into the variables using the variables declared in the previous step. Finally, declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). Display all inventory information in the console in the following form:
let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;
console.log("Rose – unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily – unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip – unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);



//-> QUIZ 3
//-> Declare and initialize the variables where you will store all the information (nine variables in total). 
//-> Display in the console information about the first and last contact in the form: name/phone/email.

let name1 = 'Maxwell Wright'
let name2 = 'Raja Villarreal'
let name3 = 'Helen Richards'

let phone1 = '01917196495'
let phone2 = '08663982895'
let phone3 = '08001111'

let email1 = 'curabitur.egestas.nunc@nonummyac.co.uk' 
let email2 = 'posuere.vupultate@sed.com'
let email3 = 'libero@contravills.edu'

let info1 = name1 + " " + phone1 + " " + email1;
let info2 = name2 + " " + phone2 + " " + email2;
let info3 = name3 + " " + phone3 + " " + email3;
console.log("Name: " + name1 + ", Phone: " + phone1 + ", Email: " + email1);
console.log("Name: " + name2 + ", Phone: " + phone2 + ", Email: " + email2);
console.log("Name: " + name3 + ", Phone: " + phone3 + ", Email: " + email3);
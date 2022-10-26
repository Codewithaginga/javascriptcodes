let selectedColours = ['red', 'blue'];

// array is a data structure
// elements can be any type
selectedColours[2] = 'green'; // array is an object
console.log(selectedColours.length);

// multidimentional array

let mult = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 11, 12, 13], [14, 15, 16, 17]];
let myMult = mult[3][3];
console.log(myMult);

// push/append array

let bible = ['Genesis', 'John', 'Mathew'];
bible.push(['luke', 'Romans']);
console.log(bible);
// remove and pop aray

let num1 = [1, 2, 3];
let removeNum3 = num1.pop();
console.log(removeNum3);

// shift remove the first element

let worldCup = ['Kenya','Brazil', 'Belgium', 'Ghana', 'Nigeria'];
let notQualified = worldCup.shift();
console.log(notQualified);

// unshift edit element to the begining of an array
let gymDay = ['Monday', 'Tueday', 'Friday'];
gymDay.shift();
gymDay.unshift('Friday');
console.log(gymDay);

// my shoping list

let myList = [['cereal', 3], ['milk', 2], ['banana', 4], ['juice', 2], ['eggs',12]];
console.log(myList);
// splice
let clb = ['arsenal', 'chelsea', 'spurs', 'united'];
let spl = clb.splice(0, 2 , 'Man city', true);
console.log(spl);


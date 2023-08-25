/* Solution 4 */
// Way 1: Array literal method.
const names1 = ["Ana", "Babel", "Casy"];
console.log("4) names1 array using literal method: ", names1);
const names2 = [];
names2[0] = "Zayn";
names2[1] = "Yasmin";
console.log("4) names2 array using literal method: ", names2);
// Way 2: Using new keyword
const names3 = new Array("Kyle", "Lina", "Mary");
console.log("4) names3 array using new keyword: ", names3);

// Accessing array element
console.log('4) accessing 1st element of names1 using index: ', names1[0]);
// Accessing the entire array
console.log('4) accessing names2 array using variable: ', names2);
console.log('4) accessing names2 array using valueOf method: ', names2.valueOf());

// Manipulating array element by accessing element
names3[1] = "Leo";
console.log('4) manipulating names3 by accessing element index: ', names3);

// recognizing an array
console.log('4) names2 is an array? ', Array.isArray(names1));
console.log('4) names3 is an array? ', names2 instanceof Array);

console.log(''); /* line break */

/* Solution 5 */
console.log('5) names1 = ', names1);
//Size of an array
const names1ArrayLength = names1.length;
console.log('5) Size of the names1 array is: ', names1ArrayLength);

// First & Last element of array
console.log('5) First element of the names1 array: ', names1[0]);
console.log('5) Last element of the names1 array: ', names1[names1ArrayLength - 1]);

// Adding element using length property
names1[names1ArrayLength] = 'Don';
console.log('5) names1 array after adding new element: ', names1);

console.log(''); /* line break */

/* Solution 6: methods to add new element to an array */
console.log('6) names2 array =', names2);
names2.push('Xavier');
console.log('6) Added "Xavier" using push method:', names2);
names2.unshift('Winnie');
console.log('6) Added "Winnie" using unshift method:', names2);
names2.splice(3, 0, "Vikram");
console.log('6) Added "Vikram" using splice method:', names2);

console.log(''); /* line break */

/* Solution 7:  methods to delete element from an array */
console.log('7) names2 array =', names2);
names2.pop('Xavier');
console.log('7) Deleting "Xavier" using pop method:', names2);
names2.shift('Winnie');
console.log('7) Deleting "Winnie" using shift method:', names2);
names2.splice(2, 1);
console.log('7) Deleting "Vikram" using splice method:', names2);

console.log(''); /* line break */

/* Solution 8: Iteration methods that loop through every elements along with their return value */
const stationary = [
  { item: 'Pen', price: 10, types: ['ball pen'] },
  { item: 'Scale', price: 10, types: ['metal scale', 'transparent scale'] },
  { item: 'Pen', price: 20, types: ['gel pen', 'ink pen'] },
];
let result;
// using forEach 
result = stationary.forEach((item) => item.price = (item.price + 5));
console.log('8) forEach method:', 'stationary=', stationary, 'return value=', result);
// using map
result = stationary.map(element => element.item);
console.log('8) map method:', 'stationary=', stationary, 'return value=', result);
// using every 
result = stationary.every(item => item.price > 10);
console.log('8) every method:', 'stationary=', stationary, 'return value=', result);
// using filter 
result = stationary.filter(item => item.price > 10);
console.log('8) filter method:', 'stationary=', stationary, 'return value=', result);
// using flatMap
result = stationary.flatMap(item => item.types);
console.log('8) flatMap method:', 'stationary=', stationary, 'return value=', result);
// using reduce
result = stationary.reduce((total, item) => (total + item.price), 0);
console.log('8) reduce method:', 'stationary=', stationary, 'return value=', result);
// using reduceRight
result = stationary.reduceRight((total, item) => (total + item.price), 0);
console.log('8) reduceRight method:', 'stationary=', stationary, 'return value=', result);

console.log(''); /* line break */

/* Solution 9: methods that return index(es) of array element(s) */
const numbers = [1, 2, 5, 10, 1, 20, 5, 100];
console.log('9) indexOf 5:', numbers.indexOf(5));
console.log('9) lastIndexOf 5:', numbers.lastIndexOf(5));
console.log('9) findIndex 5:', numbers.findIndex(num => num === 5));

console.log(''); /* line break */

/* Solution 10: methods used to check if element is present in array along with their return value. */
console.log('10) find method to check element 5:', numbers.find(num => num === 5));
console.log('10) some method to check element 5:', numbers.some(num => num === 5));
console.log('10) includes method to check element 5:', numbers.includes(5));
console.log('10) filter method to check element 5:', numbers.filter(num => num === 5));
console.log('10) findIndex method to check element 50:', numbers.findIndex(num => num === 50));
console.log('10) indexOf method to check element 50:', numbers.indexOf(50));
console.log('10) lastIndexOf method to check element 50:', numbers.lastIndexOf(50));

console.log(''); /* line break */

/* Solution 10: methods used to access last element, part of array along with their return value */
console.log('11) accessing last element of names1 using at at: ', names1.at(-1));
console.log('11) accessing part of an array using at slice: ', names1.slice(1,2));

console.log(''); /* line break */

/* Solution 12: methods used to combine arrays*/
console.log('12) combining array using concat', names1.concat(names2, names3));

console.log(''); /* line break */

/* Solution 13: Sorting & reversing it */
// for number array
console.log('13) Sorting number array: ', numbers.sort((a, b) => (a - b)));
console.log('13) Reversing number array: ', numbers.sort((a, b) => (b - a)));

// for array of objects 
function sortArray(a, b) {
  const x = a.item.toLowerCase();
  const y = b.item.toLowerCase();
  if (x < y) { 
    return -1;
  }
  if (x > y) {
    return 1; 
  }
  return 0;
}
console.log('13) Sorting array of objects: ', stationary.sort((a, b) => sortArray(a,b)));
const sortedStationary = stationary.slice();
console.log('13) Reversing sorted array of objects: ', sortedStationary.reverse());

console.log(''); /* line break */

/* Solution 14: concatenates sub-array elements */
console.log('14) Concatenating sub-array elements: ', [1, 2, [3, 4], [5, [6, 7]]].flat(2));

console.log(''); /* line break */

/* Solution 15: replacing last element with first element using methods */
let array1 = [1, 2, 3, 4, 5]; 
// using fill
console.log('15) replacing last element with first using fill', array1.fill(array1[0], array1.length - 1));
// using copyWithin
console.log('15) replacing last element with first using copyWithin', array1.copyWithin(array1.length - 1));
// using splice
array1.splice(array1.length - 1, 1, array1[0]);
console.log('15) replacing last element with first using splice', array1);

console.log(''); /* line break */

/* Solution 16: Merging array elements & splitting it */
const array2 = ["It's a sunny day", "I want ice-cream"];
console.log('16) using flatMap: ', array2.flatMap(element => element.split(" ")));
console.log('16) using join: ', array2.join(" ").split(" "));

console.log(''); /* line break */

/* Solution 17: methods to convert string to array and vice versa */
const vowels = Array.from("aeiou");
console.log('17) string to array using from method: ', vowels);
console.log('17) array to string using join method: ', vowels.join());
console.log('17) array to string using toString method: ', vowels.toString());
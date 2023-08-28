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
console.log('4) accessing 2nd element of names3 using index: ', names3[1]);
// Also methods: at, slice

// Manipulating array element
names3[1] = "Leo";
console.log('4) 2nd element of names3 after manipulating it: ', names3[1]);
// Also methods: fill, splice, copyWithin

// Accessing entire array
console.log('4) accessing names3 array using variable: ', names3);
console.log('4) accessing names3 array using valueOf method: ', names3.valueOf());
// Also slice method

// recognizing an array
console.log('4) names1 is an array? ', Array.isArray(names1));
console.log('4) names2 is an array? ', names2 instanceof Array);

console.log(''); /* line break */

/* Solution 5 */
console.log('names1 =', names1);
//Size of an array
const names1Length = names1.length;
console.log('5) Size of the names1 array is: ', names1Length);

// First & Last element of array
console.log('5) First element of the names1 array: ', names1[0]);
console.log('5) Last element of the names1 array: ', names1[names1Length - 1]);

// Adding element using length property
names1[names1Length] = 'Don';
console.log('5) names1 array after adding new element: ', names1);

console.log(''); /* line break */

/* Solution 6: methods to add new element to an array */
console.log('6) names2 =', names2);
names2.push('Xavier');
console.log('6) Added "Xavier" in names2 array using push method:', names2);
names2.unshift('Winnie');
console.log('6) Added "Winnie" in names2 array using unshift method:', names2);
names2.splice(3, 0, "Vikram");
console.log('6) Added "Vikram" in names2 array using splice method:', names2);

console.log(''); /* line break */

/* Solution 7:  methods to delete element from an array */
console.log('7) names2 =', names2);
names2.pop('Xavier');
console.log('7) Deleting "Xavier" in names2 array using pop method:', names2);
names2.shift('Winnie');
console.log('7) Deleting "Winnie" in names2 array using shift method:', names2);
names2.splice(2, 1);
console.log('7) Deleting "Vikram" in names2 array using splice method:', names2);

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
// Also methods: filter, indexOf, lastIndexOf, findIndex

console.log(''); /* line break */

/* Solution 10: methods used to access last element, part of array along with their return value */
console.log('11) accessing last element of names1 using at method: ', names1.at(-1));
console.log('11) accessing part of an array using at slice method: ', names1.slice(1, 2));

console.log(''); /* line break */

/* Solution 12: methods used to combine arrays*/
console.log('12) combining array using concat', names1.concat(names2, names3));

console.log(''); /* line break */

/* Solution 13: Sorting & reversing it */
// for number array
function sortArrayOfNumber(sortOrder) {
  const array = numbers.slice();
  return array.sort((num1, num2) => sortOrder === 'ascending' ? (num1 - num2) : (num2 - num1));
}
console.log('13) Sorting number array in ascending order: ', sortArrayOfNumber('ascending'));
console.log('13) Sorting number array in descending order: ', sortArrayOfNumber('descending'));
console.log('13) Reversing sorted number array using reverse method: ', sortArrayOfNumber('ascending').reverse());

// for array of objects 
function sortArrayOfObjects(sortOrder) {
  const array = stationary.slice();
  return array.sort((element1, element2) => {
    const value1 = element1.item.toLowerCase();
    const value2 = element2.item.toLowerCase();
    if (value1 < value2) {
      return sortOrder === 'ascending' ? -1 : 1;
    }
    if (value1 > value2) {
      return sortOrder === 'ascending' ? 1 : -1;
    }
    return 0;
  });
}
console.log('13) Sorting array of objects in ascending order: ', sortArrayOfObjects('ascending'));
console.log('13) Sorting array of objects in descending order: ', sortArrayOfObjects('descending'));
console.log('13) Reversing sorted array of objects using reverse method: ', sortArrayOfObjects('ascending').reverse());

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

/* Solution 18: methods that create array iterator objects */
console.log('18: entries method: ', array2.entries());
console.log('18: keys method: ', array2.keys());
console.log('18: values method: ', array2.values());
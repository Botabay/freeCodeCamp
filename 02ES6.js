//Compare Scopes of the var and let Keywords
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

//Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s.sort();
  // Using s = [2, 5, 7] would be invalid
  // Only change code above this line
}
editInPlace();

//Prevent Object Mutation
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
  Object.freeze(MATH_CONSTANTS)
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  //Use Arrow Functions to Write Concise Anonymous Functions
const magic = () =>new Date()

//Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

//Set Default Parameters for Your Functions
// Only change code below this line
const increment = (number=1, value=1) => number + value;
// Only change code above this line

//Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);

//Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// Only change code below this line
  const {today:{low:lowToday,high:highToday}}=LOCAL_FORECAST;
// Only change code above this line

//Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line
[a,b]=[b,a]

//Destructuring via rest elements
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b,...shorterList] =list;  // Change this line
  // Only change code above this line
  return shorterList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
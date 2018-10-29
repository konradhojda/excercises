// spread operator es6, allows us to expand arrays or other expressions where multiple parameters or elements are expected.
// Firstly i want to check with apply();

const myArray = [6, 89, 30, 45];
const theMaximum = Math.max.apply(null, myArray);

// in apply method first argument is object and the second one is array.
// lets take a look to second example where we will use spread operator

// const theSecondMaximum = (...myArray); - error because spread operator only works-in-place like an argument
// or in an array literal.

const monthsArray = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let monthArrayWithSpreadOperator;

(() => {
    monthArrayWithSpreadOperator = [...monthsArray];
    console.log(monthArrayWithSpreadOperator);
})();
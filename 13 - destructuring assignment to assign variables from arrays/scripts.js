// es6 makes destructuring arrays very easy - like objects
// diffrence between spread operator and array destructuring is that spread operator unpacks all contents of an array
// into a coma-separated list so you cannot pick or choose which elements you want to assign to variables, so:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // will return 1 and 2

// If we use comas we can reach to desire element.
const [x, y,,, z] = [1, 2, 3, 4, 5, 6];
console.log(x, y, z); // 1, 2, 5

// i want to swap value of elements so:

let f = 8, g = 6;
(() => {
    "use strict";
    [f,g] = [g,f];
})();
console.log(f);
console.log(g);
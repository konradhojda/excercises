const source = [1,2,3,4,5,6,7,8,9,10];
const removeFirstTwo = (list) => {
    "use strict";
    const [,,...arr] = list;
    return arr
};
const arr = removeFirstTwo(source);
console.log(arr); // [3,4,5,6,7,8,9,10]
console.log(source); // [1,2,3,4,5,6,7,8,9,10];
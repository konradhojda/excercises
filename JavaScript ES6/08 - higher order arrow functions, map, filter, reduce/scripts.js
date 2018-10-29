// Arrow functions is really well with higher order functions such as map, filter and reduce.

// Task is about using arrow function syntax to compute the square of only positive integers
// decimals are not integers. I will use realNumberArray and create new array to store values i want.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num,2));
};

//or we can do it in one line
// const squareList = (arr) => arr.filter((num) => num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num,2));

squareList(realNumberArray);
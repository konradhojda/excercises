'use strict';

const arrayWithRandomNumbers = [5,6,7];
// arrayWithRandomNumbers = [2,5,3]; - error because of reassign
// but i can do something like this:

arrayWithRandomNumbers[0] = 2;

console.log(arrayWithRandomNumbers);
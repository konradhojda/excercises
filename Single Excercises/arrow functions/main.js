// arrow functions

const getId = prefix => prefix + 1;

console.log(getId('ID: '));

const getSecondId = (pre, after) => pre + 1 + after;

console.log(getSecondId('ID: ', '!'));
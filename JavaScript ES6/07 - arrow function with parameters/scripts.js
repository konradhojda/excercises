// easy function to return doubled value

const doubleValue = (value) => console.log(value * 2);

const doubleAndAddValue = (value, add) => {
    console.log(value * 2 + add);
};

const myConcat = (arr1, arr2) => {
  let concatedArrays = arr1.concat(arr2);
  console.log(concatedArrays);
  // but i can show them only using arr1.concat(arr2)
};

myConcat([1, 2], [3, 4, 5]);
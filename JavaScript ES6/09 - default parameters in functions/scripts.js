// es6 provides to us functions with default parameters for functions, so:

const helloMaster = (name = "Konrad") => "Hello " + name;
// console.log(helloMaster()); - calling functions without parameter

// I will make function increment by adding default parameters. Default value will be 1;

const increment = (() => {
    return function increment(number, value = 1) {
        return number + value;
    }
})();



console.log(increment(2,5));
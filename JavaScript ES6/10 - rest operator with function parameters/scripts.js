// es6 provides to us functions with default parameters for functions, so:

const helloMaster = (name = "Konrad") => "Hello " + name;
// console.log(helloMaster()); - calling functions without parameter

// I will make function increment by adding default parameters. Default value will be 1;

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};

console.log(sum(5));
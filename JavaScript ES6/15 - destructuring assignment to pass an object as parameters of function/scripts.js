const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
    //code goes here
};

// we can do it better like:

const profileDataUpdate = ({name, age, nationality, location}) => {
    //code goes here
};

// my exercise goes here:

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

const half = (() => {
    return (({min,max}) => {
        return (min + max ) / 2;
    });
})();

console.log(stats); // should be object
console.log(half(stats)); // should be 28.015

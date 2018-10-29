// const value cannot be reassigned so it's awesome feature.

// const myVar = 'Cat';
// myVar = 'Dog'; === // ERROR

'use strict';

const printManyTimes = (val) => {
    const mySentence = val + 'is cool';
    for (let i = 0; i < val.length; i++) {
        console.log(mySentence);
    }
};

printManyTimes('JavaScript!');
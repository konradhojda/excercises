const startCar = function(carId) {
    let message = 'start The Vehicle';
};
// console.log(message); // error because message has function scope

const startTheCar = function(carId) {
    let message = 'starting...';
    const startThis = function() {
        console.log(message);
        // we can access to this variable - closures
    };
    startThis();
    // or we can use iife
    console.log(message);
};


const startFinallyThisCar = function(carId) {
    let message = 'start.....';
    const startHere = function() {
        let message = 'overwritten this variable';
        console.log(message)
    };
    startHere();
    console.log(message);
};

startFinallyThisCar(123);
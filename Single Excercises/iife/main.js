// Immediately Invoked Function Expression

(function() {
   console.log('Hello, i\'m iife');
})();

const app = (function() {
    let carId = 123;
    console.log('in something');
    return {}
})();

console.log(app);
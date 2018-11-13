// closures

const app = (function() {
    let someId = 122;
    const getId = function() {
        return someId;
    };
    return {
        getId: getId
    }
})();

console.log(app.getId());
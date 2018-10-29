// keyword class is new in JS. It is provided by ES6 syntax.
// In ES5 we can create constructor like this:

var SpaceShuttle = function (targetPlanet) {
    this.targetPlanet = targetPlanet;
};

var pluton = new SpaceShuttle('Jupiter');

// in ES6 we can do something like this:

class NewSpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

const newPluton = new NewSpaceShuttle('Jupiter');

// exercise

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
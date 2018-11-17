class Vehicle {
    constructor() {
        console.log('constructing vehicle!');
    }
}

class Drone extends Vehicle {

}

class Car extends Vehicle {
    constructor() {
        super();
        console.log('constructing car!');
    }
}

let c = new Car();
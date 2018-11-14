// inheritance

class MyVehicle {
    constructor() {
        this.type = 'car'
    }
    startTheCar() {
        return `We\'re starting: ${this.type}`;
    }
}

class Car extends MyVehicle {
    startTheCar() {
        return 'some text ' + super.startTheCar();
    }
}

let car = new Car();
console.log(car.startTheCar());
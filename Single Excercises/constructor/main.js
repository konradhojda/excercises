// constructor function

class Car {
    constructor(id, name, weight) {
        this.id = id;
        this.name = name;
        this.weight = weight + 'kg';
        this.startVehicle = function() {
            console.log('We are starting ' + this.name + '. ' + 'Wehicle has ' + this.id + ' and weight about ' + this.weight)
        }
    }
}

let newCar = new Car(12, 'Opel', 4500);
newCar.startVehicle();


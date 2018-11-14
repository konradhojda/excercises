// classes

class NewCar {
    constructor(id) {
        this.id = id;
    }
}

let newCar = new NewCar(123);

newCar.id = 555; /// 555

class Car {
    constructor(id) {
        this.id = id;
    }
    getId(parameter) {
        return `Car id is: ${this.id} ${parameter}`;
    }
}

let newSuperCar = new Car(555);
console.log(newSuperCar.getId('parameter'));



// we can obtain values from an object and set a value of a property within an object by getters and setters.
//Getters return (get) the value of an object's private variable to user without the user directly accessing private variable
//Setters modify (set) value of an object's private variable, based on the value passed into the setter function,
//this change could involve calculations or even overwriting the previous value completely.

class NewBook {
    constructor(author) {
        this._author = author;
    }
    get writer() {
        return this._author;
    }
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
    }
}

const newBuuk = new NewBook('Konrad');
newBuuk.writer = 'New Author';

//exercise

class Thermostat {
    constructor(temp) {
        this._temp = temp;
    }
    get temperature() {
        return (5/9 * (this._temp - 32)).toFixed((2));
    }
    set temperature(temperature) {
        this._temp = temperature;
    }
}

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
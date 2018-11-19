import {Car} from "./classes/car.js";
import {Drone} from "./classes/drone.js";
import {fleet} from "../fleet-data.js";
import {FleetDataService} from "./services/fleet-data-service.js";

let dataService = new FleetDataService();
dataService.loadData(fleet);

//let car = dataService.getCarByLicense('AT9900');
// let cars = dataService.getCardSortedByLicense();

let cars = dataService.filterCarByMake('e');
console.log(cars);

for (let car of cars) {
    console.log(car)
}

// console.log(dataService.drones);
// console.log(dataService.cars);
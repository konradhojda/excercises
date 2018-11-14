let someIds = [
    {id: 123, style: 'blabla'},
    {id: 222, style: 'bebe'},
    {id: 227, style: 'babakaka'}
];

someIds.forEach(car => console.log(car)); // to output all cars objects
someIds.forEach((car, index) => console.log(car, index));

someIds.map(el => console.log(el));

let filteredArray = someIds.filter(function(el) {
    return el.id > 123;
});

console.log(filteredArray);

// every

let everyResult = someIds.every(
    car => car.id > 122
);

let findElement = someIds.find(
    car => car.id > 123
);

console.log(findElement);
// spread operator is very effective. Now we will use  Destructuring assignment.
// in ES5

var esFive = {
    x: 3.5,
    y: 7,
    z: 6.75
};
// var x = esFive.x;
// var y = esFive.y;
// var z = esFive.z;

//es6

const {x,y,z} = esFive;
// console.log(x,y,z);

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const {tomorrow: {max: maxOfTomorrow}} = forecast;
    // change code above this line
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));
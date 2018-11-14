// json

let someObject = {
    id: 555,
    style: 'someStyle'
};

console.log(JSON.stringify(someObject));

let newObject = [
    {id: 555},
    {id: 222},
    {id: 234}
];

console.log(JSON.stringify(newObject));

// parse JSON

let jsonIn =
    `
    [
    {"id" : 555},
    {"id": 333},
    {"id": 2556}
    ]
`;

let parsedJSON = JSON.parse(jsonIn);
console.log(parsedJSON);

let stringedJsonIn = JSON.stringify(parsedJSON);
console.log(stringedJsonIn);

// or

console.log(JSON.stringify(parsedJSON));
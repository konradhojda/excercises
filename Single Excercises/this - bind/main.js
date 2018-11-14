// bind

let myO = {
    id: 123,
    getId: function () {
        return this.id;
    }
};

let newId = {id: 456};
let newGetId = myO.getId.bind(newId);

console.log(newGetId());
// this keyword


const someFunction = function() {
    console.log( this === window)
};

let myObject = {
    myId: 123,
    getMyId: function() {
        console.log(this);
        return this.myId
    }
};

console.log(myObject.getMyId());

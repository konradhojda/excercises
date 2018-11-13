// change context of this - apply and call

let myObject = {
    myId: 123,
    getMyId: function() {
        console.log(this);
        return this.myId
    }
};

let newObject = {
    myId: 456
};

console.log(myObject.getMyId.call(newObject));

let newObjectToApply = {myId: 456};

let objectToApply = {
    myId: 123,
    getMyId: function(prefix) {
        console.log(this);
        return prefix + this.myId;
    }
};

console.log(objectToApply.getMyId.apply(newObjectToApply, ['ID: ']));

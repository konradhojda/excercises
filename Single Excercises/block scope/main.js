// block scope variables

let message = 'some string about message';

if (5 === 5) {
    let message = 'Equal';
    console.log(message);
}

console.log(message);

if (6 === 6) {
    var newMessage = 'variable has no block scope :( !';
}

console.log(newMessage);
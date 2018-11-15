// promises

let promise = new Promise(
    function(resolve,reject) {
        setTimeout(reject, 100, 'myValue');
    }
);

promise.then(
    value => console.log('fulfilled: ', value),
    error => console.log('rejected: ' + error)
);
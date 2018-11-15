// errors in JS

try {
    let newCar = null;
}
catch (error) {
    console.log('error: ', error);
}
finally {
    console.log('continuing...');
}
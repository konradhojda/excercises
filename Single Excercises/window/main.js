let seconds = 0;
let setMyInterval = setInterval(function() {
    console.log(`${seconds++} second passed!`);
    if(seconds === 5) {
        clearInterval(setMyInterval);
    }
}, 1000);
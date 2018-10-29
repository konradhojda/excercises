const checkFreeze = () => {
    let someObject = {
        name: 'Konrad',
        feature: 'awesome'
    };

    Object.freeze(someObject);
// so now i cannot add any mutation to my object, all will be ignored. Let's check. In strict mode i got error.
    someObject.feature = 'ugly';
    someObject.name = 'Maciej';
    console.log(someObject);
};

const freezeObject = () => {
    'use strict';
    const mathConstant = {
        PI: 3.14
    };
    Object.freeze(mathConstant);

    try {
        mathConstant.PI = 50;
    } catch (error) {
        console.log(error);
    }
    console.log(mathConstant.PI);
};

freezeObject();

//i've got error so test is passed. I cannot change value of object property while object is freezed;
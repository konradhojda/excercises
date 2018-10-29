// Var is declared globally, or locally if declared inside a function
// Let keyword is similar, but has extra features. Let inside a block, statement or expression has limited scope.
// Scope depends of block statement or expression.

const checkScope = () => {
    let variableToCheckScope = 'function scope';
    if (true) {
        let variableToCheckScope = 'block scope';
        console.log('Block scope i is: ', variableToCheckScope);
    }
    console.log('Function scope i is: ', variableToCheckScope);
};

checkScope();


// Closures are skill of function on view and access the parameters on scope;

const name3 = 'adads';

function newFunc() {
    const name2 = 'Teste';
    const name = 'Fernando';
    return function func() {
        return [name, name2, name3];
    }
}
const func = newFunc();

console.log(func);
console.dir(func);
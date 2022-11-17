// For in Array

const arr = ['a', 'b', 'c'];

for (let index in arr) {
    console.log(`index: ${index}`);
    console.log(`value: ${arr[index]}`);
}

// For in Object

const obj = { name: 'Fernando', lastName: 'Alves' };

for (let key in obj) {
    console.log(`key: ${key}`);
    console.log(`value: ${obj[key]}`);
}
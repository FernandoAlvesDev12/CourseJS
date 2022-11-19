
const person = {
    name: 'Fernando',
    surname: 'Alves',
    age: 25,
}

for ([key, value] of Object.entries(person)) {
    console.log(`The key is ${key} and value is ${value}`);
}
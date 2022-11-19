// Declaring Person
function Person(name) {
    this.name = name;
    this.human = true;
}
Person.prototype.sayName = function () {
    return `My name is ${this.name}!`;
}

const p1 = new Person('Fernando');
console.log(p1.sayName());


// Declaring Developer
function Developer(stack) {
    this.stack = stack;
}

const d1 = new Developer('FrontEnd');
Object.setPrototypeOf(d1, p1);

console.log(d1);
console.log(d1.stack);
console.log(d1.name);
console.log(d1.sayName());
console.log(d1.human);


// Object create
const d2 = Object.create(Person.prototype, { name: { value: 'Regiane' }, stack: { value: 'Dietician' } });
console.log(d2.sayName());
console.log(d2.stack);

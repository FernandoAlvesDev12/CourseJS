// Inheritance with polymorphism

// Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.say = function () {
    return `Hi, my name is ${this.name}!`;
}

const p1 = new Person('Fernando', 25);
console.log(p1.say());


// Developer
function Developer(name, age, stack) {
    Person.call(this, name, age);
    this.stack = stack;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;
Developer.prototype.say = function () {
    return `Hi, my name is ${this.name}, and I'm ${this.stack} Developer`;
};

const developer1 = new Developer('Fernando', 25, 'Frontend');
console.log(developer1.say());
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    Object.defineProperty(this, 'human', { value: true, writable: false });
}

Person.prototype.fullName = function () {
    return `${this.name} ${this.surname}`;
};

const p1 = new Person('Fernando', 'Alves', 25);
p1.human = false;
console.log(p1.human);

// p1.__proto__ === Person.prototype
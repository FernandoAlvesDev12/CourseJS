class Person {
    #age; // private prop

    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.#age = age;
    }

    get fullname() {
        return `${this.name} ${this.surname}`;
    }

    set fullname(fullname) {
        fullname = fullname.split(' ');
        this.name = fullname.shift();
        this.surname = fullname.join(' ');
    }

    sayName() {
        console.log(`My name is ${this.fullname}, and have ${this.#age} old!`);
    }
}

class Developer extends Person {
    constructor(name, surname, age, stack) {
        super(name, surname, age);
        this.stack = stack
    }

    sayName() {
        console.log(`My name is ${this.fullname}, and I'm ${this.stack} Developer!`);
    }
}

const developer1 = new Developer('Fernando', 'Alves', 25, 'Frontend');
console.log(developer1);
developer1.sayName();
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

const person1 = new Person('Fernando', 'Alves', 25);
console.log(person1);
console.log(person1.fullname);

person1.fullname = 'Regiane Oliveira';
console.log(person1);
person1.sayName();
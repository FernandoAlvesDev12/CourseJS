// actions
const walk = {
    walk() {
        console.log(`${this.name} is walking`);
    }
}

const drink = {
    drink() {
        console.log(`${this.name} is drinking`);
    }
}

const personPrototype = { ...drink, ...walk };

function createPerson(name, age) {
    return Object.create(personPrototype, {
        name: { value: name },
        age: { value: age },
        human: { value: true, writable: false },
    });
}

const person1 = createPerson('Fernando', 25);
console.log(person1.human);
person1.human = false;
console.log(person1.human);

person1.drink();
person1.walk();
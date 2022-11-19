// getters and setters
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;

    Object.defineProperty(this, 'fullname', {
        enumerable: false, // show key
        get: () => `${this.name} ${this.surname}`,
        set: (fullname) => {
            fullname = fullname.split(' ');
            this.name = fullname.shift();
            this.surname = fullname.join(' ');
        },
        configurable: true // can change any config of property
    });
}

const p1 = new Person('Fernando', 'Alves', 25);
console.log(p1);
console.log(p1.fullname);

p1.fullname = 'Regiane Oliveira Alves';
console.log(p1.fullname);
console.log(p1.name);
console.log(p1.surname);

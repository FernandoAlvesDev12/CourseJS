// Constructor Function
function Person(name, surname, age, height, weight) {
    //all below will private 
    const getImc = (weight, height) => {
        return weight / (height ** 2);
    };

    //all below will public 
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.imc = () => {
        return getImc(this.weight, this.height)
    };

    this.getFullname = () => {
        return `${this.name} ${this.surname}`;
    };

    this.setFullname = (name) => {
        name = name.split(' ');
        this.name = name.shift();
        this.surname = name.join(' ');
    };
}

const p1 = new Person('Fernando', 'Alves', 25, 1.70, 75);

console.log(p1.imc);

console.log(p1.getFullname());
console.log(p1.name);
console.log(p1.surname);

p1.setFullname('Williams Racing');
console.log(p1.getFullname());
console.log(p1.name);
console.log(p1.surname);
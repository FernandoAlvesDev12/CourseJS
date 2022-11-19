// Factory Function
function createPerson(name, surname, age, height, weight) {
    //all below will private 
    const getImc = (weight, height) => {
        return weight / (height ** 2);
    }

    //all below will public 
    return {
        name,
        surname,
        age,
        height,
        weight,
        get imc() {
            return getImc(this.weight, this.height)
        },
        get fullname() {
            return `${this.name} ${this.surname}`;
        },
        set fullname(name) {
            name = name.split(' ');
            this.name = name.shift();
            this.surname = name.join(' ');
        }
    }
}

const p1 = createPerson('Fernando', 'Alves', 25, 1.70, 75);
console.log(p1.imc);

console.log(p1.fullname);
console.log(p1.name);
console.log(p1.surname);

p1.fullname = 'Williams Racing';
console.log(p1.fullname);
console.log(p1.name);
console.log(p1.surname);
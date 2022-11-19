const product = Object.freeze({
    name: 'Product',
    price: 20,
})

product.name = 'New Produt';
console.log(product);

function Person(name, age) {
    this.name = name;
    this.age = age;
    Object.freeze(this);
}

const p1 = new Person('Fernando', 25);
p1.name = 'New Name';
p1.age = 30;
console.log(p1);

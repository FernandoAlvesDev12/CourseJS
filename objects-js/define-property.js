// defineProperty and defineProperties
function Product(name, price, store) {
    this.name = name;
    this.price = price;

    Object.defineProperty(this, 'store', {
        enumerable: false, // show key
        value: store, // value
        writable: false, // can change
        configurable: true // can change any config of property
    });

    console.log(this.store);
}

const p1 = new Product('T-shirt', 20, 3);
console.log(p1);
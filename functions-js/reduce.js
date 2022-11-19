const arr = [1, 2, 3, 10];
const total = arr.reduce((acc, value, index, array) => {
    return acc += value;
}, 0)
console.log(total);

const totalArrFunc = arr.reduce((acc, value) => acc += value);
console.log(totalArrFunc);

const arrObj = [{ value: 1 }, { value: 2 }, { value: 3 }];
const totalarrObj = arr.reduce((acc, value) => acc += value * 2, 100);
console.log(totalarrObj);

const fruits = ['apple', 'melon', 'watermelon', 'orange'];
const cals = [12, 7, 2, 36];
const objFruits = fruits.reduce((acc, fruit, index) => {
    acc.values.push({ name: fruit, cal: cals[index] });
    acc.total += cals[index]; return acc
},
    { values: [], total: 0 });

// const objFruits = fruits.map((fruit, index) => { return { name: fruit, cal: cals[index] } });

console.log(objFruits);
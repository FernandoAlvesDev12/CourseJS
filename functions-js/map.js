const arr = [1, 2, 3];
const newValue = arr.map(m => m * 2);
console.log(arr, newValue);

const arrObj = [{ value: 1 }, { value: 2 }, { value: 3 }];
const newarrObj = arrObj.map(m => m.value = m.value * 2);
console.log(arrObj, newarrObj);

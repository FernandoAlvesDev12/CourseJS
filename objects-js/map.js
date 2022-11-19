const data = [{ id: 1, name: 'Fernando' }, { id: 2, name: 'Regiane' }];
const dataMap = new Map();

for (const { id, name } of data) {
    dataMap.set(id, { id, name });
}

console.log(dataMap);
// dataMap.keys()
// dataMap.values()
// dataMap.delete(2)
// dataMap.get(2)
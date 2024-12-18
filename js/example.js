// let total = sum(10)(20)(30)();
// let total = sum(10)(23)(34)(20)(30)();

function sum(...args1) {
  const store = [...args1];
  return function curry(...args2) {
    store.push(...args2);
    if ([...args2].length === 0) {
      return store.reduce((a, b) => a + b, 0);
    } else return curry;
  };
}
console.log(sum(10)(20)(30, 40, 80)());

//flattening an array

function flat(arr) {
  let res = [];
  for (item of arr) {
    if (!Array.isArray(item)) {
      res.push(item);
    } else {
      let temp_res = flat(item);
      res = [...res, ...temp_res];
    }
  }
  return res;
}

console.log(flat([1, 2, [3, 4, [5, 6, 9]]]));

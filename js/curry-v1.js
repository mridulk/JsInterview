// let sum = curry();
// function curry(tt = 0) {
//   let t = tt;
//   return function (n) {
//     console.log("n", n, t);
//     if (n) {
//       t = t + n;
//       return curry(t);
//     }
//     return t;
//   };
// }
// let total = sum(10)(20)(30)();
// console.log(total);

// a better appraoch - for multiple args

function sum(...args1) {
  const store = [...args1];
  if (!args1) return 0;
  return function curry(...args2) {
    store.push(...args2);
    if (args2.length === 0) return store.reduce((a, b) => a + b, 0);
    else return curry;
  };
}
let total = sum(10, 23, 34)(20)(30)();
console.log(total);

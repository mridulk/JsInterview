const curry = (fn) => {
  return function helper(...args) {
    if (args.length >= fn?.length) {
      return fn(...args);
    } else {
      const temp = (...args2) => {
        const store = [...args, ...args2];
        return helper(...store);
      };
      return temp;
    }
  };
};
function sum(a, b, c, d) {
  return a + b + c + d;
}
const carriedsum = curry(sum);
console.log(carriedsum(2)(20, 3, 4));
// carriedsum(1,2,3,4);
// carriedsum(1)(2)(3,4);
// carriedsum(1)(2,3,4);

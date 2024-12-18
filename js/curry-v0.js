const curry = () => {
  let total = 0;
  return function (n) {
    total = total + n;
    return total;
  };
};

let sum = curry();
console.log(sum(2));
console.log(sum(4));
console.log(sum(9));


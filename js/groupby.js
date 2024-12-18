const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

Array.prototype.myReduce = function (cb, initValue) {
  let acc = initValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

Object.prototype.groupBy = function (arr, cb) {
  return arr.myReduce((a, b) => {
    let key = cb(b);
    if (!a[key]) {
      a[key] = [b];
    } else {
      a[key] = [...a[key], b];
    }
    return a;
  }, {});
};

console.log(Object.groupBy(inventory, ({ type }) => type));

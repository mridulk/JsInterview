const input = {
  A: 23,
  B: 24,
  C: {
    L: 21,
    O: {
      Q: 90,
    },
    Q: [1, 2],
  },
};

const input2 = [1, 2, [3, 4, [5, 6, 7, 8, [9, 10]]]];

// output
// ans = {
//   A: 23,
//   B: 24,
//   "C.L": 21,
//   "C.O.Q": 90,
//   "C.Q.1": 2,
// };
function flattenObj(obj, prefix = "") {
  let result = {};
  for (item in obj) {
    let pre = !prefix ? item : prefix + "" + item;
    let value = obj[item];
    if (typeof value == "object") {
      let recursiveResult = flattenObj(value, pre);
      result = { ...result, ...recursiveResult };
    } else {
      result[pre] = obj[item];
    }
  }
  return result;
}

console.log(flattenObj(input));

const flattenArray = (arr) => {
  let result = [];
  for (val of arr) {
    if (Array.isArray(val)) {
      let tempRes = flattenArray(val);
      result = [...result, ...tempRes];
    } else {
      result.push(val);
    }
  }
  return result;
};
console.log(flattenArray(input2));

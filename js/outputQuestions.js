const example_obj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
};

// Fn(obj)(1, 1, 1);
function deepFlattenObj(obj) {
  return function temp(...params) {
    function iterate(obj) {
      for (let item in obj) {
        if (typeof obj[item] !== "object") {
          obj[item] = obj[item](...params);
        } else {
          iterate(obj[item]);
        }
      }
    }
    iterate(obj);
    console.log("object", obj);
  };
}
deepFlattenObj(example_obj)(1, 1, 1);

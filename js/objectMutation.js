function stopMutation(obj) {
  for (let item in obj) {
    let value = obj[item];
    if (typeof value === "object") {
      stopMutation(value);
    }
  }
  return Object.freeze(obj);
}

let obj = {
  a: 25,
  b: 26,
  c: {
    d: 23,
    e: {
      f: 29,
    },
  },
};

stopMutation(obj);
obj.a = 29;
console.log(obj);

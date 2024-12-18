const arr = [1, 2, 3, 4, 5];
// map pollyfill
Array.prototype.myMap = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    let ele = cb(this[i], i, this);
    temp.push(ele);
  }
  return temp;
};
const new_arr = arr.myMap((item, index, arr) => {
  return item * item;
});

console.log("new array after mapping", new_arr);

// for each pollyfill
arr.forEach((item, index, arr) => {
  console.log("item", item);
});

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.myForEach((item, index, arr) => {
  console.log("item myforeach", item);
});

// filter pollyfill

Array.prototype.myFilter = function (cb) {
  const temp = [];
  for (let i = 0; i < this.length; i++) {
    const flag = cb(this[i], i, this);
    if (flag) {
      temp.push(this[i]);
    }
  }
  return temp;
};
const new_arr_filter = arr.myFilter((item, index, arr) => {
  if (item % 2 == 0) {
    return true;
  } else {
    return false;
  }
});

console.log("new filtered array", new_arr_filter);

//Reduce pollyfill
arr.reduce((a, b, c, d) => {
  console.log(a, b, c, d);
  return a + b;
}, 0);

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};
console.log(arr.myReduce((a, b) => a + b));

// call polyfill
function dummyFn(name, age) {
  console.log(
    `My name is ${name} and age is ${age}. I live in ${this.address}`
  );
}

const dummyObj = {
  address: "New Delhi",
};
dummyFn.call(dummyObj, "Mridul", 25);

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Error");
  }
  context.fn = this;
  context.fn(...args);
};
dummyFn.myCall(dummyObj, "Mridul", 25);

// apply polyfill
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("Error");
  }
  if (!Array.isArray(args)) {
    throw new Error("Error");
  }
  context.fn = this;
  context.fn(...args);
};
dummyFn.myApply(dummyObj, ["Mridul", 25]);

//bind polyfill
// const fn = dummyFn.bind(dummyObj, "Mridul", 26);
// fn();
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Error");
  }
  context.fn = this;
  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};
const fn = dummyFn.myBind(dummyObj, "Mridul", 26);
fn();

const obj = {
  name: "Mridul Khurana",
  age: 20,
  address: "New Delhi",
};

function func(workEx) {
  // by default this will point to global object
  console.log(
    `Name is ${this.name}, age is ${this.age}, lives in ${this.address}. Has a work experience of ${workEx} years`
  );
}
//call
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("not a callable function");
  }
  context.fn = this;
  context.fn(...args);
};
func.myCall(obj, 20);
//apply
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("not an appliable function");
  }
  if (!Array.isArray(args)) {
    throw new Error("args is not array");
  }
  context.fn = this;
  context.fn(...args);
};
func.myApply(obj, [20]);

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("not a bind func");
  }
  return function (...args2) {
    context.fn = this;
    context.fn(...args, ...args2);
  };
};

const bindFn = func.bind(obj, 20);
bindFn();
//bind

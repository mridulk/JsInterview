// promise polyfill
function myPromise(executor) {
  let isResolve;
  let isReject;
  let isFulfilled = false;
  let isCalled = false;
  let val;
  function resolve(value) {
    isFulfilled = true;
    val = value;
    if (typeof isResolve == "function") {
      isResolve(value);
      isCalled = true;
    }
  }
  function reject(value) {
    isFulfilled = true;
    val = value;
    if (typeof isResolve == "function") {
      isReject(value);
      isCalled = true;
    }
  }
  this.then = function (cb) {
    isResolve = cb;
    if (!isCalled && isFulfilled) {
      isResolve(val);
      isCalled = true;
    }
    return this;
  };
  this.catch = function (cb) {
    isReject = cb;
    if (!isCalled && isFulfilled) {
      isReject(val);
      isCalled = true;
    }
    return this;
  };
  executor(resolve, reject);
}
function fn(params) {
  return new myPromise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved");
    }, 5000);
  });
}

fn()
  .then((res) => {
    console.log("res", res);
  })
  .catch((e) => {
    console.log("error", e);
  });

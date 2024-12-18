const debounce = (cb, d) => {
  let timer;
  let context = this;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(context, ...args);
    }, d);
  };
};

const throttle = (cb, d) => {
  let last = 0;
  let context = this;
  return function (...args) {
    let current = Date.now();
    if (current - last < d) return;
    last = current;
    cb.apply(context, ...args);
  };
};

let debounceBtn = document.getElementById("button_debounce");
let throttleBtn = document.getElementById("button_throttle");
let debounceCountEle = document.getElementById("count_debounce");
let throttleCountEle = document.getElementById("count_throttle");
const duration = 1000;
let counter = 0;
let count = 0;
let t = throttle(() => {
  counter += 1;
  throttleCountEle.innerText = counter;
}, duration);
let d = debounce(() => {
  count += 1;
  debounceCountEle.innerText = count;
}, duration);
const onTclick = () => {
  t();
};
const onDclick = () => {
  d();
};


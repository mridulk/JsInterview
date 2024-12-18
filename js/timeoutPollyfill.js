function createTimeout() {
  let mainCounter = 1;
  let mainMap = {};
  function customSetTimeout(cb, delay) {
    let id = mainCounter++;
    let startTime = Date.now() + delay;
    mainMap[id] = true;
    function recursive() {
      console.log("in recursive functon");
      if (!mainMap[id]) return;
      if (Date.now() > startTime) {
        cb();
      } else {
        requestIdleCallback(recursive);
      }
    }
    requestIdleCallback(recursive);

    return id;
  }

  function customClearTimeout(id) {
    delete mainMap[id];
  }
  return { customSetTimeout, customClearTimeout };
}
const { customSetTimeout } = createTimeout();
customSetTimeout(() => {
  console.log("hello ji");
}, 1000);

// function createTimeInterval() {
//   let mainMap = {};
//   let mainCounter = 1;
//   function customSetInterval(cb, delay) {
//     let id = mainCounter++;
//     function recursive() {
//       mainMap[id] = setTimeout(() => {
//         if (!mainMap[id]) return;
//         cb();
//       }, delay);
//     }
//     recursive();
//     return id;
//   }
//   function customClearInterval(id) {
//     clearTimeout(id);
//     delete mainMap[id];
//   }
//   return { customSetInterval, customClearInterval };
// }
// const { customSetInterval, customClearInterval } = createTimeInterval();

// let resid = customSetInterval(() => {
//   console.log("QWdewf");
// // setTimeout(() => {
// //   console.log("resid", resid);
// //   customClearInterval(resid);
// // }, 5000);

// // // // // // // function sum(...args1) {
// // // // // // //   const store = [...args1];
// // // // // // //   if (!args1) return 0;
// // // // // // //   return function curry(...args2) {
// // // // // // //     store.push(...args2);
// // // // // // //     if (args2.length == 0) return store.reduce((a, b) => a + b, 0);
// // // // // // //     else return curry;
// // // // // // //   };
// // // // // // // }
// // // // // // // let total = sum(10, 23, 34)(20)(30)();

// // import { resolve } from "path";

// // // // // // // console.log("total", total);
// // // // // // function removeDynamicPath(path) {
// // // // // //   // Define a dynamic regex pattern to match '/{urlName}-candidates'
// // // // // //   const regex = /\/[a-zA-Z0-9_-]+-candidates/g;

// // // // // //   // Replace any occurrence matching the pattern with an empty string
// // // // // //   return path.replace(regex, "");
// // // // // // }

// // // // // // // Example usage:
// // // // // // const path1 = "/example-candidates";
// // // // // // const path2 = "/john_doe-candidates";
// // // // // // const path3 = "/123abc-candidates";

// // // // // // console.log(removeDynamicPath(path1), "siuh"); // Output: ""
// // // // // // console.log(removeDynamicPath(path2)); // Output: ""
// // // // // // console.log(removeDynamicPath(path3)); // Output: ""
// // // // // const dummy = {
// // // // //   a: 1,
// // // // //   b: {
// // // // //     c: {
// // // // //       d: {
// // // // //         name: "mridul",
// // // // //         age: 26,
// // // // //       },
// // // // //     },
// // // // //   },
// // // // //   e: {
// // // // //     f: [1, 2, 3, 4, 5],
// // // // //   },
// // // // // };

// // // // // function traverse(obj, pre = "") {
// // // // //   let res = {};

// // // // //   for (let item in obj) {
// // // // //     let temp_prefix = pre ? pre + "." + item : item + "";
// // // // //     const value = obj[item];
// // // // //     if (typeof value !== "object") {
// // // // //       res[temp_prefix] = value;
// // // // //     } else {
// // // // //       const tempRes = traverse(value, temp_prefix);
// // // // //       res = { ...res, ...tempRes };
// // // // //     }
// // // // //   }
// // // // //   return res;
// // // // // }
// // // // // console.log(traverse(dummy, ""));

// // // // // const JSONStringify = (obj) => {
// // // // //   const isArray = (value) => {
// // // // //     return Array.isArray(value) && typeof value === "object";
// // // // //   };

// // // // //   const isObject = (value) => {
// // // // //     return typeof value === "object" && value !== null && !Array.isArray(value);
// // // // //   };

// // // // //   const isString = (value) => {
// // // // //     return typeof value === "string";
// // // // //   };

// // // // //   const isBoolean = (value) => {
// // // // //     return typeof value === "boolean";
// // // // //   };

// // // // //   const isNumber = (value) => {
// // // // //     return typeof value === "number";
// // // // //   };

// // // // //   // Common check for number, string and boolean value
// // // // //   const restOfDataTypes = (value) => {
// // // // //     return isNumber(value) || isString(value) || isBoolean(value);
// // // // //   };

// // // // //   // Boolean and Number behave in a same way and String we need to add extra qoutes
// // // // //   if (restOfDataTypes(obj)) {
// // // // //     const passQuotes = isString(obj) ? `"` : "";
// // // // //     return `${passQuotes}${obj}${passQuotes}`;
// // // // //   }

// // // // //   // This function will be used to remove extra comma from the arrays and object
// // // // //   const removeComma = (str) => {
// // // // //     const tempArr = str.split("");
// // // // //     tempArr.pop();
// // // // //     return tempArr.join("");
// // // // //   };

// // // // //   // Recursive function call for Arrays to handle nested arrays
// // // // //   if (isArray(obj)) {
// // // // //     let arrStr = "";
// // // // //     obj.forEach((eachValue) => {
// // // // //       arrStr += JSONStringify(eachValue);
// // // // //       arrStr += ",";
// // // // //     });

// // // // //     return `[` + removeComma(arrStr) + `]`;
// // // // //   }

// // // // //   // Recursive function call for Object to handle nested Object
// // // // //   if (isObject(obj)) {
// // // // //     let objStr = "";

// // // // //     const objKeys = Object.keys(obj);

// // // // //     objKeys.forEach((eachKey) => {
// // // // //       const eachValue = obj[eachKey];
// // // // //       objStr += `"${eachKey}":${JSONStringify(eachValue)},`;
// // // // //     });
// // // // //     return `{` + removeComma(objStr) + `}`;
// // // // //   }
// // // // // };

// // // // // const sampleObj = {
// // // // //   name: "Sid",
// // // // //   age: 29,
// // // // //   engineer: true,
// // // // //   expertise: ["html", "css", "react"],
// // // // //   address: {
// // // // //     city: "New york",
// // // // //     state: "NY",
// // // // //     address: {
// // // // //       postalCode: 110064,
// // // // //       postal: "Deljhi",
// // // // //     },
// // // // //   },
// // // // // };

// // // // // console.log(JSONStringify(sampleObj));
// // // // // // Expected Output -> Test case Passed
// // // // const obj = {
// // // //   name: "mridul",
// // // //   abc: () => {
// // // //     console.log(this);
// // // //   },
// // // //   abc1: function () {
// // // //     console.log(this);
// // // //   },
// // // // };
// // // // const ab = obj.abc;
// // // // const ab1 = obj.abc1;
// // // // ab();
// // // // ab1();

// // // // const commentObj = [
// // // //   {
// // // //     id: ''
// // // //   }
// // // // ]
// // // let comments = [
// // //   {
// // //     id: 1,
// // //     text: "This is the first comment",
// // //     author: "User1",
// // //     replies: [
// // //       {
// // //         id: 2,
// // //         text: "This is a reply to the first comment",
// // //         author: "User2",
// // //         replies: [
// // //           {
// // //             id: 3,
// // //             text: "Nested reply to the first reply",
// // //             author: "User3",
// // //             replies: [],
// // //           },
// // //           {
// // //             id: 4,
// // //             text: "Another nested reply to the first reply",
// // //             author: "User4",
// // //             replies: [],
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         id: 5,
// // //         text: "Another reply to the first comment",
// // //         author: "User5",
// // //         replies: [],
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     id: 6,
// // //     text: "This is the second comment",
// // //     author: "User6",
// // //     replies: [
// // //       {
// // //         id: 7,
// // //         text: "Reply to the second comment",
// // //         author: "User7",
// // //         replies: [
// // //           {
// // //             id: 8,
// // //             text: "Nested reply to the reply on second comment",
// // //             author: "User8",
// // //             replies: [],
// // //           },
// // //         ],
// // //       },
// // //     ],
// // //   },
// // //   {
// // //     id: 9,
// // //     text: "This is the third comment",
// // //     author: "User9",
// // //     replies: [],
// // //   },
// // // ];

// // // const addAComment = (comments, id, objToAdd) => {
// // //   for (let item of comments) {
// // //     if (item.id === id) {
// // //       item.replies = [...item.replies, objToAdd];
// // //     } else {
// // //       if (item && item?.replies?.length > 0) {
// // //         addAComment(item?.replies, id, objToAdd);
// // //       }
// // //     }
// // //   }
// // // };

// // // const deleteAComment = (commentsArr, id) => {
// // //   for (let i in commentsArr) {
// // //     const item = commentsArr[i];
// // //     if (item.id === id) {
// // //       commentsArr.splice(i, 1);
// // //       console.log("coment", item, commentsArr);
// // //       return;
// // //     } else {
// // //       if (item && item?.replies?.length > 0) {
// // //         deleteAComment(item?.replies, id);
// // //       }
// // //     }
// // //   }
// // // };
// // // addAComment(comments, 8, {
// // //   id: 8.1,
// // //   text: "This is the 8.1 comment",
// // //   author: "User8.1",
// // //   replies: [],
// // // });
// // // addAComment(comments, 8.1, {
// // //   id: 8.2,
// // //   text: "This is the 8.2 comment",
// // //   author: "User8.2",
// // //   replies: [],
// // // });
// // // deleteAComment(comments, 8.2);
// // // console.log(JSON.stringify(comments));

// // function createTimeout() {
// //   let timerMap = new Map();
// //   let count = 1;
// //   function customTimeout(cb, delay) {
// //     count = count + 1;
// //     timerMap.set(count, true);
// //     let currentTime = Date.now() + delay;
// //     function recursive() {
// //       if (!timerMap.has(count)) return;
// //       if (Date.now() > currentTime) {
// //         cb();
// //       } else {
// //         requestIdleCallback(recursive);
// //       }
// //     }
// //     requestIdleCallback(recursive);

// //     return count;
// //   }
// //   function customClearTimeout(id) {
// //     if (timerMap.has(id)) {
// //       timerMap.delete(id);
// //       return true;
// //     } else {
// //       return false;
// //     }
// //   }
// //   return { customClearTimeout, customTimeout };
// // }

// // function createTimeInterval() {
// //   let count = 0;
// //   let timerMap = new Map();
// //   function customTimeInterval(cb, delay) {
// //     let id = count++;
// //     function recursive() {
// //       let timerId = setTimeout(() => {
// //         if (!timerMap.has(id)) return;
// //         cb();
// //         requestIdleCallback(recursive);
// //       }, delay);
// //       timerMap.set(id, timerId);
// //     }
// //     requestIdleCallback(recursive);
// //     return id;
// //   }
// //   function customClearInterval(id) {
// //     clearTimeout(id);
// //     timerMap.delete(id);
// //   }
// //   return { customTimeInterval, customClearInterval };
// // }

// // const { customTimeout, customClearTimeout } = createTimeout();
// // const { customClearInterval, customTimeInterval } = createTimeInterval();
// // customTimeout(() => {
// //   console.log("timer ened");
// // }, 5000);

// // customTimeInterval(() => {
// //   console.log("time interval");
// // }, 2000);

// function CustomPromise(executor) {
//   let isResolved;
//   let isRejected;
//   let value;
//   let isCalled;
//   let isFulfilled;

//   function resolve(v) {
//     isFulfilled = true;

//     value = v;
//     if (typeof isResolved == "function") {
//       isResolved(v);
//       isCalled = true;
//     }
//   }
//   function reject(v) {
//     isFulfilled = true;

//     value = v;
//     if (typeof isRejected == "function") {
//       isRejected(v);
//       isCalled = true;
//     }
//   }
//   this.then = function (cb) {
//     isResolved = cb;
//     if (!isCalled && isFulfilled) {
//       isResolved(value);
//       isCalled = true;
//     }
//     return this;
//   };
//   this.catch = function (cb) {
//     isRejected = cb;
//     if (!isCalled && isFulfilled) {
//       isRejected(value);
//       isCalled = true;
//     }
//     return this;
//   };
//   executor(resolve, reject);
// }

// const func = () => {
//   return new CustomPromise((resolve, reject) => {
//     setTimeout(() => {
//       reject("rejected");
//     }, 10);
//   });
// };
// func()
//   .then((res) => {
//     console.log("value", res);
//   })
//   .catch((err) => {
//     console.log("response", err);
//   });
//LRu cache
class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) {
      return;
    }
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
      this.cache.set(key, value);
    } else {
      this.cache.set(key, value);
    }
  }
  print() {
    for (let [key, value] of this.cache) {
      console.log(key, value);
    }
  }
}
const obj = new LRU(3);
obj.set("1", "Mridul");

obj.set("2", "Naman");
obj.set("3", "Rohan");
obj.get("1");
obj.set("4", "Driysham");
obj.print();

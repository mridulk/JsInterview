// const arr = [1, 3, 4, 5, 678, 900, 3456];

// function binarySearch(arr, target, low, high) {
//   if (low > high) return -1;
//   const mid = (low + high) / 2;
//   if (arr[mid] == target) return mid;
//   else if (arr[mid] > target) return binarySearch(arr, target, low, mid - 1);
//   else return binarySearch(arr, target, mid + 1, high);
// }
// const ans = binarySearch(arr, 900, 0, arr.length - 1);
// console.log("answer", ans);

// const arr1 = [1, 2, 0, 0, 4, 0, 6, 0];

// // function moveZerosToEnd(arr1) {}
// // console.log(moveZerosToEnd(arr1));

// //longest subarray sum equal to K
// // const K = 3;
// // const arr = [
// //   1, 2, 3, 0, 56, 0, 0, 0, -45, 0, 1, 1, 1, 1, 0, 0, -1, -3, 89, -100,
// // ];

// // function sum(arr = []) {
// //   return arr.reduce((a, b) => a + b, 0);
// // }
// // let maxLen = 0;
// // let map = new Map();
// // for (let i in arr) {
// //   for (let j = i; j < arr.length; j++) {
// //     const new_arr = arr.slice(i, j + 1);
// //     let total = sum(new_arr);
// //     if (total == K) {
// //       map.set(arr.slice(i, j + 1), K);
// //       maxLen = Math.max(maxLen, j - i + 1);
// //     }
// //   }
// // }

// // let left = 0;
// // let right = 0;
// // let sum = arr[0];
// // let maxLen = 0;
// // while (right < arr.length) {
// //   while (sum > K && left <= right) {
// //     sum -= arr[left];
// //     left++;
// //   }
// //   if (sum == K) {
// //     maxLen = Math.max(maxLen, right - left + 1);
// //   }
// //   sum += arr[right];
// //   right++;
// // }
// // console.log("maxlength", maxLen);

// // max sunaaray sum
// // const arr = [-4, -4, -3, -1, 1, -2, 0, 0, 9, 1, -9, 10];

// // let left = 0;
// // let max_sum = Number.MIN_SAFE_INTEGER;
// // let sum = 0;
// // let right = 0;
// // for (let i = 0; i < arr.length; i++) {
// //   if (sum == 0) {
// //     left = i;
// //   }
// //   sum += arr[i];
// //   if (sum > max_sum) {
// //     max_sum = sum;
// //     right = i;
// //   }
// //   if (sum < 0) {
// //     sum = 0;
// //   }
// // }
// // console.log("max sum", max_sum, left, right);
// // console.log(arr.slice(left, right + 1));

// const k = 14;
// const a = [2, 5, 7, 1, 10];
// let l = 0;
// let r = 0;
// let sum = 0;
// let res = undefined;
// let max_len = 0;
// while (r < a.length) {
//   sum += a[r];
//   while (sum > k && l <= r) {
//     sum -= a[l];
//     l++;
//   }
//   if (sum <= k) {
//     if (r - l + 1 > max_len) {
//       max_len = r - l + 1;
//       res = a.slice(l, r + 1);
//     }
//   }
//   r++;
// }

// // console.log("result", res, sum, max_len);
// var lengthOfLongestSubstring = function (s) {
//   const arr = s.split("");
//   let map = new Map();
//   let l = 0;
//   let r = 0;
//   let max_len = 0;
//   while (r < arr.length) {
//     if (map.get(arr[r]) !== undefined) {
//       if (map.get(arr[r]) >= l) {
//         l = map.get(arr[r]) + 1;
//       }
//     }
//     // console.log("l", l, r);
//     max_len = Math.max(max_len, r - l + 1);
//     map.set(arr[r], r);
//     r++;
//   }
//   return max_len;
// };

// console.log(lengthOfLongestSubstring("abcabcbb"));

//merge overlapping sub intervals
// const arr = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];

// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// var merge = function(intervals) {

//     let res = [];
//   intervals = intervals.sort((a, b) => a[0] - b[0]);
//   let pair = intervals[0];
//     for (let item of intervals) {
//       if (pair[1] >= item[0]) {
//         pair[1] = Math.max(item[1], pair[1]);
//       } else {
//         res.push(pair);
//         pair = item;
//       }
//     }
//     res.push(pair);
//     return res;
//   };
// console.log(mergeIntervals(arr));

const arr = [3, 5, 6, 7];
// //print all sun=bsequence
// function recursive(i, arr, list, sum) {
//   if (i >= arr.length) {
//     // console.log(list);
//     if (sum == 9) {
//       console.log(list);
//     }
//     return;
//   }
//   list.push(arr[i]);
//   sum += arr[i];
//   recursive(i + 1, arr, list, sum);
//   //   console.log(i, list);
//   let ele = list.pop();
//   sum -= ele;
//   recursive(i + 1, arr, list, sum);
// }
// recursive(0, arr, [], 0);
// let count = 0;
// function recursive(i, arr, list, target) {
//   if (i >= arr.length) {
//     if (list[0] + list[list.length - 1] <= target) {
//       count++;
//     }
//     return;
//   }
//   list.push(arr[i]);
//   recursive(i + 1, arr, list, target);
//   list.pop();
//   recursive(i + 1, arr, list, target);
// }
// var numSubseq = function (nums, target) {
//   nums.sort();
//   recursive(0, nums, [], target);
//   return count;
// };

// console.log(numSubseq([2, 3, 3, 4, 6, 7], 12));

//priority queue
//min heap implementation
// class pq {
//   constructor() {
//     this.values = [];
//   }
//   add(key, value) {
//     let flag = false;
//     for (let i in this.values) {
//       if (this.values[i]?.value > value) {
//         this.values.splice(i, 0, {
//           key,
//           value,
//         });
//         flag = true;
//         break;
//       }
//     }
//     if (!flag) {
//       this.values.push({
//         key,
//         value,
//       });
//     }
//   }
//   get() {
//     return this.values[0];
//   }
//   delete() {
//     return this.values.shift();
//   }
//   size() {
//     return this.values.length;
//   }
//   getValues() {
//     return this.values;
//   }
// }
// const priorityQueue = new pq();
// var maxSubsequence = function (nums, k) {
//   for (let i in nums) {
//     if (priorityQueue.size() == k) {
//       if (nums[i] > priorityQueue.get().value) {
//         priorityQueue.delete();
//         priorityQueue.add(i, nums[i]);
//       }
//     }
//     if (priorityQueue.size() < k) {
//       priorityQueue.add(i, nums[i]);
//     }
//   }
//   const res = [];
//   const pq_values = priorityQueue.getValues().sort((a, b) => a.key - b.key);
//   for (let i in pq_values) {
//     res.push(priorityQueue.getValues()[i].value);
//   }
//   return res;
// };

// console.log(maxSubsequence([-1, -2, 3, 4], 3));
// function merge(left, right) {
//   const temp = [];
//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       temp.push(left.shift());
//     } else {
//       temp.push(right.shift());
//     }
//   }
//   return [...temp, ...left, ...right];
// }
// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let mid = Math.floor(arr.length / 2);
//   let arr1 = mergeSort(arr.slice(0, mid));
//   let arr2 = mergeSort(arr.slice(mid));
//   return merge(arr1, arr2);
// }

// function mergeTwoArrays(arr1, arr2) {
//   const temp = [];
//   while (arr1.length && arr2.length) {
//     if (arr1[0] < arr2[0]) {
//       temp.push(arr1.shift());
//     } else {
//       temp.push(arr2.shift());
//     }
//   }
//   return [...temp, ...arr1, ...arr2];
// }

// console.log(mergeTwoArrays([1, 2, 3, 5, 78, 89], [45, 67, 89, 100]));
//print all subsequences of a srting
// function strSubsequence(arr, index, list = []) {
//   if (index >= arr.length) {
//     console.log(list);
//     return;
//   }
//   list.push(arr[index]);
//   strSubsequence(arr, index + 1, list);
//   list.pop();
//   strSubsequence(arr, index + 1, list);
// }

// console.log(strSubsequence("abdce".split(""), 0, []));
//level order
// * Definition for a binary tree node.
// * function TreeNode(val, left, right) {
// *     this.val = (val===undefined ? 0 : val)
// *     this.left = (left===undefined ? null : left)
// *     this.right = (right===undefined ? null : right)
// * }
// */
// /**
// * @param {TreeNode} root
// * @return {number[][]}
// */
// var levelOrder = function (root) {
//    let res = [], queue = [];

//    if (root === null) return res;

//    // first level
//    queue.push(root);
//    // traverse queue
//    while (queue.length !== 0) {
//        // get numbers of every level
//        let length = queue.length;
//        // every level node array
//        let curLevel = [];

//        // traverse every level
//        for (let i = 0; i < length; i++) {
//            // pop first node from queue
//            let node = queue.shift();
//            curLevel.push(node.val);
//            // add the child elements under the current element
//            node.left && queue.push(node.left);
//            node.right && queue.push(node.right);

//        }

//        res.push(curLevel);
//    }
//    return res;
// };
// const quickSort = (arr) => {
//     if (arr.length <= 1) {
//       return arr;
//     }

//     let pivot = arr[0];
//     let leftArr = [];
//     let rightArr = [];

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         leftArr.push(arr[i]);
//       } else {
//         rightArr.push(arr[i]);
//       }
//     }

//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
//   };

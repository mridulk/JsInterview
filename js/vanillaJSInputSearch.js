// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = "pre";
  var post = "post";
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

(function () {
  const input = document.getElementById("input_search");
  const dropdown = document.getElementById("input_dropdown");
  const onFocus = (e) => {
    dropdown.style.display = "block";
  };
  const onChange = async (e) => {
    try {
      console.log("value:", e.target.value);
      const { value } = e.target;
      dropdown.innerText = "";
      const res = await getSuggestions(value);
      console.log("response array", res);
      if (!res) return;
      const mainList = document.createElement("ul");
      res.forEach((element) => {
        const ele = document.createElement("li");
        ele.innerText = element;
        mainList.appendChild(ele);
      });
      dropdown.innerText = "";
      dropdown.appendChild(mainList);
    } catch (error) {
      console.log("error: ", error);
    }
  };
  const onWindowClick = (e) => {
    if (e.target === input || e.target === dropdown) {
      return;
    }
    // console.log("e target outside ", e.target);
    dropdown.style.display = "none";
  };
  const onDropdownLclick = (e) => {
    console.log("inner dropdown text", e.target.innerText);
    if (e.target === dropdown) return;
    else {
      input.value = e.target.innerText;
    }
  };
  input.addEventListener("focus", onFocus);
  input.addEventListener("keyup", onChange);
  window.addEventListener("click", onWindowClick);
  dropdown.addEventListener("click", onDropdownLclick, true);
})();

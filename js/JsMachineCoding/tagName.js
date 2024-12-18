document.querySelector(".container").addEventListener("mousemove", (e) => {
  const { offsetX, offsetY } = e;
  console.log("mousemove", offsetX, offsetY);
});
const container = document.querySelector(".container");
const inputEle = document.querySelector(".input-tag");
container.addEventListener("click", (e) => {
  const { offsetX, offsetY } = e;
  const inputValue = inputEle.value;
  const ele = document.createElement("div");
  ele.textContent = `${inputValue}`;
  ele.style.background = "white";
  ele.style.border = "1px solid black";
  ele.style.position = "absolute";
  ele.style.top = `${offsetY}px`;
  ele.style.left = `${offsetX}px`;
  container.appendChild(ele);
});
// document.querySelector(".container").addEventListener("mouseout", (e) => {
//   console.log("mouseOut", e);
// });

function findChildToParentPath(child, root) {
  try {
    if (!child || !root) return;
    let current = child;
    const result = [];
    console.log("current.parentElement", current.parentElement);
    while (current !== root) {
      const childArrayIndex = Array.from(
        current.parentElement.children
      ).indexOf(current);
      result.push(childArrayIndex);
      current = current.parentElement;
    }
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}
function findValueFromPath(root, path) {
  try {
    let currentNode = root;
    while (path.length) {
      currentNode = currentNode.children[path.pop()];
    }
    return currentNode.textContent;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

function generateCSSSelector(root, child) {
  try {
    if (!root || !child) throw new Error("Child or Parent is undefined");
    let current = child;
    const result = [];
    while (current !== root) {
      const childIndex = Array.from(current.parentElement.children).indexOf(
        current
      );
      const tagName = current.tagName?.toLowerCase();
      result.unshift(`${tagName}:nth-child(${childIndex + 1})`);
      current = current.parentElement;
    }
    result.unshift(`${current.tagName?.toLowerCase()}`);
    return result.join(">");
  } catch (error) {
    console.log("error", error);
    return null;
  }
}

function getElementsByClassName(root, className) {
  let results = [];
  try {
    if (!root) return results;
    if (root.classList.contains(className)) {
      results.push(root.id);
    }
    for (let child of root.children) {
      const temp = getElementsByClassName(child, className);
      results = [...results, ...temp];
    }
    return results;
  } catch (error) {
    console.log("error", error);
    return results;
  }
}

const childA = document.getElementById("childA");
const rootA = document.getElementById("rootA");
console.log("patrh", childA, rootA);
const path = findChildToParentPath(childA, rootA);
console.log("path", path);
const value = findValueFromPath(rootA, path);
console.log("value", value);
const selector = generateCSSSelector(rootA, childA);
console.log("css selector", selector);
const elemntsbyClassName = getElementsByClassName(rootA, "test");

console.log("elementsbyclassNAme", elemntsbyClassName);

function fakePromise() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.8) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });
}

async function retryPromise(fakePromise, retryCount, delay) {
  try {
    const result = await fakePromise();
    console.log("retry number", retryCount);
    return result;
  } catch (error) {
    console.log("retry number", retryCount);
    if (retryCount > 0) {
      setTimeout(() => {
        retryPromise(fakePromise, retryCount - 1, delay);
      }, delay);
    } else {
      throw new Error("All reties failed");
    }
  }
}
retryPromise(fakePromise, 10, 2000);

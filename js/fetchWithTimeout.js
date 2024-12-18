const fetchWithTimeout = async (url, duration) => {
  return new Promise((resolve, reject) => {
    // create abort controller instance
    const controller = new AbortController();

    // create singal
    const signal = controller.signal;

    // timer
    let timer = undefined;
    //fetch call
    fetch(url, { signal })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        clearTimeout(timer);
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
    timer = setTimeout(() => {
      console.log("api call aborted");
      controller.abort();
    }, duration);
  });
};

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const duration = 500;
fetchWithTimeout(apiUrl, duration)
  .then((data) => {
    console.log("Payload data: ", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

const cachedCall = (time) => {
  const cacheMap = {};
  return async (url = "", config = {}) => {
    const key = url + JSON.stringify(config);
    if (!cacheMap[key] || Date.now() > cacheMap[key].expiry) {
      try {
        console.log("in api call");
        const res = await fetch(url);

        const data = await res.json();
        console.log("api response", data);
        cacheMap[key] = {
          value: data,
          expiry: Date.now() + time,
        };
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    return cacheMap[key].value;
  };
};
const call = cachedCall(1500);
const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
call(apiUrl)
  .then((data) => {
    console.log("data: undefined", data);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
setTimeout(() => {
  call(apiUrl)
    .then((data) => {
      console.log("data: 1800", data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}, 1800);
setTimeout(() => {
  call(apiUrl)
    .then((data) => {
      console.log("data : 5200", data);
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}, 5200);

//callbacks

function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello,world!";
    callback(data);
  }, 2000);
}

function process(data) {
  console.log("Data received:", data);
}

console.log("Start");
fetchData(process);
console.log("End");

//promises

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        const data = "Hello,world!";
        resolve(data);
      } else {
        const error = "Failed to fetch data.";
        reject(data);
      }
    }, 2000);
  });
}

console.log("Start");
fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Operation complete.");
  });

console.log("End");

//asynch/await

async function fetchDataAndProcess() {
  try {
    console.log("Start");

    const data = await fetchData();
    console.log("Data received:", data);
    console.log("End");
  } catch (error) {
    console.log("Error", error);
  } finally {
    console.log("Operation complete.");
  }
}

fetchDataAndProcess();

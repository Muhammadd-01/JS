console.log(setTimeout(()=>{
    console.log("Affan")
},0));







// 1. Create the promise
const helloPromise = new Promise((resolve) => {
  resolve("Hello World");
});

// 2. Consume the promise
helloPromise.then((message) => {
  console.log(message); 
});


let count = 0;
const intervalid = setInterval(() => {
  console.log("hello world");
  count++;
  if (count === 5) {
    clearInterval(intervalid);
  }
}, 2000);
console.log(`i will run first`);

//ctrl + c to kill the process

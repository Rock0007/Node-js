//First Code
const amount = 9;

if (amount < 10) {
  console.log("Amount is less than ten"); // This will be executed if the condition evaluates to true, otherwise it won't execute this line
} else {
  console.log("Amount is greater than or equal to ten");
}

//globals
console.log(__dirname);

//setInterval
setInterval(() => {
  console.log("Hello");
}, 1000);

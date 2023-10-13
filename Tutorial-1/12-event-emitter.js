const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("event", (name, id) => {
  console.log(`Data recieved ${name} ${id}`);
});

customEmitter.on("event", () => {
  console.log("some other response");
});

customEmitter.emit("event", "jhon", 34);

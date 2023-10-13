const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("homepage");
  } else if (req.url === "/about") {
    //Blocking Code
    //ctrl + c to kill the loop
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; i < 1000; j++) {
        console.log(`i: ${i} j: ${j}`);
      }
    }
    res.end("about page");
  } else {
    res.end("Error, page not found");
  }
});

server.listen(3000, () => {
  console.log("server listening on port 3000");
});

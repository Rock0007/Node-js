const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to HomePage");
  } else if (req.url === "/about") {
    res.end("Welcome to aboutPage");
  } else {
    res.statusCode = 404;
    res.end(`
      <h1>Oops!</h1>
      <p>We Can't seem to find the page you are looking for.</p>
      <a href='/'>Back Home</a>`);
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});

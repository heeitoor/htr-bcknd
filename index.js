var http = require("http");

http
  .createServer((req, res) => {
    res.end("dfsdf");
  })
  .listen(process.env.PORT || 3500);

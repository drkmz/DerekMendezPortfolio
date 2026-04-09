
const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
  let url = req.url;

  console.log(url)
  if(url === "/"){
    res.writeHead(200, {"Content-type": "text/html"});
    fs.createReadStream("../index.html").pipe(res);
  }
  else if(url === "/css/style.css") {
    res.writeHead(200, {"Content-type": "text/css"});
    fs.createReadStream("../css/style.css").pipe(res);
  }
  else if(url === "/js/main.js") {
    res.writeHead(200, {"Content-type": "text/javascript"});
    fs.createReadStream("./main.js").pipe(res);
  }
  else if(url === "/images/fgany.png"){
    res.writeHead(200, {"Content-type": "image/png"});
    fs.createReadStream("../images/fgany.png").pipe(res);
  }
  else if(url === "/images/sportsplusli.png"){
    res.writeHead(200, {"Content-type": "image/png"});
    fs.createReadStream("../images/sportsplusli.png").pipe(res);
  }
  else if(url === "/images/smartplate.png"){
    res.writeHead(200, {"Content-type": "image/png"});
    fs.createReadStream("../images/smartplate.png").pipe(res);
  }
  else if(url === "/pages/about.html"){
    res.writeHead(200, {"Content-type": "text/html"});
    fs.createReadStream("../pages/about.html").pipe(res);
  }
  else if(url === "/pages/contact.html"){
    res.writeHead(200, {"Content-type": "text/html"});
    fs.createReadStream("../pages/contact.html").pipe(res);
  }

});


server.on("listening", () => {
  console.log(`Listening on port ${port}`);
});

server.listen(port);

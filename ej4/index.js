const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "./views";

  switch (req.url) {
    case "/":
      filePath += "/home.html";
      break;
    case "/about":
      filePath += "/about.html";
      break;
    case "/contact":
      filePath += "/contact.html";
      break;
    case "/services":
      filePath += "/services.html";
      break;
    case "/location":
      filePath += "/location.html";
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - Página no encontrada</h1>");
      return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error interno del servidor");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

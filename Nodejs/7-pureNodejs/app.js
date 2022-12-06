const http = require('http');
const fs = require('fs');

/** handle GET request */
function getHandlerIndexHTML(req, res, reqUrl) {
  res.writeHead(200);
  const indexHTML = fs.readFileSync('index.html', 'utf8', (err, data) => {
    if (err) throw err;
    return data;
  });
  res.end(indexHTML);
}

function getHandlerIndexCSS(req, res, reqUrl) {
  res.writeHead(200);
  const indexCSS = fs.readFileSync('index.css', 'utf8', (err, data) => {
    if (err) throw err;
    return data;
  });
  res.end(indexCSS);
}

function getHandlerIndexJS(req, res, reqUrl) {
  res.writeHead(200);
  const indexJS = fs.readFileSync('index.js', 'utf8', (err, data) => {
    if (err) throw err;
    return data;
  });
  res.end(indexJS);
}

function getHandlerRawHTML(req, res, reqUrl) {
  res.writeHead(200);
  res.write('<h1>Welcome</h1>');
  res.end();
}

function getHandlerUsers(req, res, reqUrl) {
  res.writeHead(200);
  const users = fs.readFileSync('users.json', 'utf8', (err, data) => {
    if (err) throw err;
    return data;
  });
  res.end(users);
}

/** if there is no related function which handles the request, then show error message */
function noResponse(req, res) {
  res.writeHead(404);
  res.write('Sorry, this path not available..\n');
  res.end();
}

http.createServer((req, res) => {
  // create an object for all redirection options
  const router = {
    'GET/': getHandlerIndexHTML,
    'GET/index.css': getHandlerIndexCSS,
    'GET/index.js': getHandlerIndexJS,
    'GET/raw-html': getHandlerRawHTML,
    'GET/users': getHandlerUsers,
    'default': noResponse
  };
  // parse the url by using WHATWG URL API
  let reqUrl = new URL(req.url, 'http://localhost/');
  // find the related function by searching "method + pathname" and run it
  let redirectedFunc = router[req.method + reqUrl.pathname] || router['default'];
  redirectedFunc(req, res, reqUrl);
}).listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
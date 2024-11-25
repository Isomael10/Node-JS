//Task 1

console.log("Hello World");

const { log } = require('console');
//task 2
const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello node !!!!');
}); // Correct, parenthèse fermante ajoutée.
server.listen(3000);

log('server running at http://localhost:3000/');

//task 3

let fs = require('fs');
fs.writeFile('hello.txt', 'hello from Node', (err)=> {
    if (err) throw err;
    console.log('file create and saved');
})
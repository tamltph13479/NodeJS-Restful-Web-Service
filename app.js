const http = require('http');

const express = require('express');

const app = express();
const check = ((req, res, next) => {
    const status = true;
    if (status) {
        console.log("chao sep")
        next();
    } else {
        console.log("khong co quyen truy cap")
    }
})
app.get('/', (req, res) => {
    res.send('<h1> Home pase </h1>')
})
app.get('/api/products', check, (req, res) => {

    const products = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" }
    ];
    res.json(products)
})

// const server = http.createServer((req, res) => {
//     console.log('url', req.url);
//     if (req.url === "/") {
//         res.setHeader('Content-Type', "text/html");
//         res.write("<html><body><h1>Home Page</h1></body></html>")
//         res.end();
//     } else if (req.url === "/api/products") {
//         const products = [
//             { id: 1, name: "Product A" },
//             { id: 2, name: "Product B" }
//         ];
//         res.end(JSON.stringify(products));
//     } else {
//         console.log('Giờ thì em biết rồi');
//     }
// });


const PORT = 3001;

app.listen(PORT, () => {
    console.log("Server is running port", PORT);
})
const express = require('express');
const app = express();
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

let userservice = "http://localhost:3001";

app.all("/user/*", function(req, res) {
    console.log('redirecting to Server');
    apiProxy.web(req, res, {target: userservice});
});

app.listen(3000);
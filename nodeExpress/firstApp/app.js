const express = require("express");
const app = express();
/*
API
get - read
post - create
put - update 
delete - delete

app.get(route,callBac);
app.get('/',(req,res)=>{

})

The callback function has 2 parameters, request(req) & response(res).
The request object(req) represents the HTTP REQUEST 
& has properties for the request query string, parameters, body,
HTTP headers, etc.

Similarly, the response object represents the HTTP RESPONSE
that the Express App sends when it receive HTTP request.


*/

app.get("/", (req, res) => {});

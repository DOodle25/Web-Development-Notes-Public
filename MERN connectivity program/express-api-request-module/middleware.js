const request = require('request')
const express = require('express');
// Request URL
const app = express();
const port = 3000;
var ans=null;
var url = 'https://jsonplaceholder.typicode.com/todos/1';
request(url, (error, response, body)=>{
	// Printing the error if occurred
	if(error) console.log(error)

	// Printing status code
	console.log(response.statusCode);
	ans=body
	// Printing body
	// console.log(body);
})
 
app.get('/',function(req,res){
    res.setHeader('content-type','text/json');
    res.send(ans);
})
app.listen(3000);


console.log('server running at http://localhost:3000');
//

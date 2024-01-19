// console.log("Hello WOrld");
// var a = 5;
// var b = 4;
// var sum = a+b;
// console.log(sum);

// // const c = 10;
// // c = "ten is printed";
// // console.log(c);

// let y = 20;
// y = 30; // Valid
// console.log(y);

var http=require("http");
http.createServer(function(request,response)
{
    response.writeHead(200);
    response.end('Hello, Welcome Vinay!\n');
}).listen(8081);

console.log("running");



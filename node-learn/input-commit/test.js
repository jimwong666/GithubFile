var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var Root = path.resolve('.');

// 创建http server，并传入回调函数:
var server = http.createServer(function (request, response) {
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    // console.log(request);
	// console.log(request.method + ': ' + request.url);
	// if(request.url === "/") {
		
	// };
	if(request.url === "/qwer") {
		console.log(request);
		console.log(request.method + ': ' + request.url);
		let body = '';
		request.on('data', function (d) {
			body += d;
		});
		request.on('end', function () {
			console.log(body);
		})

		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end();
	} else if(request.url.indexOf("/file") >= 0){
		var fileName = url.parse(request.url).pathname.replace("/file","");
		var filePath = "";
		if(!!fileName) {
			filePath = path.join(Root,fileName);
			console.log(filePath);
		}
		fs.stat(filePath, function (err, stats) {
			if (!err && stats.isFile()) {
				response.writeHead(200,{ 'Content-Type': 'application/octet-stream' });
				fs.createReadStream(filePath).pipe(response);
			} else {
				response.writeHead(404);
				response.end('404 Not Found');
			}
		});
		// response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		// response.end("文件服务器");
	} else {
		fs.readFile('./test.html',function(err,data){
			if(err)
				console.log("对不起，您所访问的路径出错");
			else{
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.write(data);
				response.end();
			}
		})
	}
});

// 让服务器监听8080端口:
server.listen(8000);

// console.log('Server is running at http://127.0.0.1:8000/');
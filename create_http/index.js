// 创建简单的http服务器

const http = require('http');
const fs = require('fs');


const server = http.createServer(function (req, res) {
    // 设置响应的头部
    res.writeHead(200, {
        'content-type': 'text/html'
    });

    // 读取文件数据
    let data = fs.readFileSync('./index.html');
    // 响应返回数据
    res.write(data);
    res.end();
});

//设置服务器端口
server.listen(3000, function () {
    console.log('listening port 3000');
    console.log('you can access home page: http://127.0.0.1:3000');
});

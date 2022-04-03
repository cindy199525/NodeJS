const http = require('http')
const fs = require('fs')

// req请求对象
// res相应对象
const app = http.createServer(function (req, res) {
    fs.readFile('./index.html', 'utf-8', (err, data) => {
        res.write(data)
        res.end();

    })



})

app.listen(9090, () => { console.log("启动成功了"); })
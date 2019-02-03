const express = require('express')
const app = express()
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//app.get('/', (req, res) => res.send('Hello World!'))

// on the request to root (localhost:3000/)
// app.post('/', function (req, res) {
//     res.send('You have reached the express http server');
// });
app.get('/', function (req, res) {
    res.send('<b>My</b> first express http server');
});

app.post('/add/:no1/:no2', function (req, res) {
    var no1 = req.params.no1;
    var no2 = req.params.no2;
    var no3 = Number(no1);
    var no4 = Number(no2);
    var result = no3+no4;
    //result.toString();
    res.send(""+result+"");
});
app.post('/sub/:no1/:no2', function (req, res) {
    var no1 = req.params.no1;
    var no2 = req.params.no2;
    var no3 = Number(no1);
    var no4 = Number(no2);
    var result = no3-no4;
    //result.toString();
    res.send(""+result+"");
});
app.post('/mul/:no1/:no2', function (req, res) {
    var no1 = req.params.no1;
    var no2 = req.params.no2;
    var no3 = Number(no1);
    var no4 = Number(no2);
    var result = no3*no4;
    //result.toString();
    res.send(""+result+"");
});
app.post('/div/:no1/:no2', function (req, res) {
    var no1 = req.params.no1;
    var no2 = req.params.no2;
    var no3 = Number(no1);
    var no4 = Number(no2);
    var result = no3/no4;
    //result.toString();
    res.send(""+result+"");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
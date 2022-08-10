// create server with express
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors())
// create function to handle GET requests
app.post('/', function(req, res) {
    console.log('req.body', req.body)
    if(req.body.status ===   500) res.sendStatus(500);
    else  res.json({"name": "hellow world"});
}
);
// run server on port 3000
app.listen(port, function() {
    console.log('Server running on port ' + port);
    }
);



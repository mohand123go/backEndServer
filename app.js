// create server with express
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors())
// create function to handle GET requests
// app.post('/store_key/ios', function(req, res) {
//     console.log('req.body', req.body)
//     if(req.body.status ===   500) res.sendStatus(200);
//     else  res.json({
//         "ulid": "...",
//         "store_ids": []
//       });
// }
// );
// app.get('/store_key/ios', function(req, res) {
//     console.log('req.body', req.body)
//     if(req.body.status ===   500) res.sendStatus(200);
//     else  res.json({
//         "ulid": "...",
//         "store_ids": []
//       });
// }
// );

// app.post('/store_key/ios', function(req, res) {
//     console.log('req.body', req.body)
//     res.status(422);
//          res.json({
//         error: "Invalid authentication, we are unable to fetch the app bundle IDs from your App store connect account Please, try again"
//       });
// }
// );

app.post('/store_key/ios', function(req, res) {
    console.log('req.body', req.body)
    res.status(200);
         res.json(
            {
                "ulid": "5252",
                "store_ids": [{"bundle_id": "a", ios_app_id:1},
                {"bundle_id": "b", ios_app_id:8},
                {"bundle_id": "c", ios_app_id:2},
                {"bundle_id": "d", ios_app_id:3},
                {"bundle_id": "e", ios_app_id:4},
                {"bundle_id": "f", ios_app_id:5},
                {"bundle_id": "g", ios_app_id:6},
                {"bundle_id": "h", ios_app_id:7}]
              }
         );
}
);

app.post('/store_integration/ios', function(req, res) {
    console.log('req.body', req.body)
    res.status(200);
    res.send()
    }
);
// run server on port 3000
app.listen(port, function() {
    console.log('Server running on port ' + port);
    }
);



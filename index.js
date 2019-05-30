var express = require('express');
var app = express();
var request = require('request');
const bodyParser = require('body-parser');


const accountSid = process.env.SID;
const authToken = process.env.KEY;

const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/incoming', (req, res) => {
  console.log(req.body)
});

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});


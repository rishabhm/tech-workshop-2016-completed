var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/scripts'));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/hello', function (request, response) {
	response.send('<b>hello  again</b>');
})

http.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('user_input', function (message) {
  	io.emit('from_server', message)
  })
});

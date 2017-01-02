$(document).ready(function () {
	var socket = io();
	$('#send').click(function () {
		socket.emit('user_input', $('#message').val())
	})
	socket.on('from_server', function (message) {
		$('body').append(message + '<br />')
	})
})

var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

// Définit les actions sur la réception des évènements
chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emission des évènements
chat.emit('join','JM');
chat.emit('message','Salut les amis!');

var events = require('events');
var EventEmitter = events.EventEmitter;
var emitter = new EventEmitter();

var callback = function(message){
  console.log(message);
};

emitter.on('message',callback);

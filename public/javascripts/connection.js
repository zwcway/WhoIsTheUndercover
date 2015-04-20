/**
 * Created by Administrator on 15/4/20.
 */


(function (io) {

  var socket = io();


  function chat(message) {
    socket.emit('user chat', message);
  }
})(io);
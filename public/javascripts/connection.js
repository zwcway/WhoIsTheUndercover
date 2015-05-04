/**
 * Created by Administrator on 15/4/20.
 */


define([
  'exports',
  'socket-io'
], function (Connection, io) {

  /**
   * @type {Socket}
   */
  var socket = io();

  window.socket = socket;

  Connection.chat = function (message) {
    socket.emit('user chat', message);
  };

  //return Connection;
});
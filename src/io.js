import SocketIO from 'socket.io';

const io = SocketIO();

io.use((socket, next) => {
  socket.user = {
    name: 'Hello world',
  };

  next();
});

io.on('connect', (socket) => {
  socket.on('message', (data) => {
    socket.broadcast.send(data);
  });
});

export default io;

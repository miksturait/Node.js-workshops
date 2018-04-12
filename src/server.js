import { Server } from 'http';
import app from './app';
import io from './io';

const server = Server(app);

io.attach(server);

server.listen(process.env.PORT || 3000, () => {
  console.info('Our app is running');
});

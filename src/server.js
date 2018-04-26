import { Server } from 'http';
import { createConnection } from 'typeorm';
import app from './app';
import io from './io';

const server = Server(app);

io.attach(server);

(async () => {
  await createConnection();

  server.listen(process.env.PORT || 3000, () => {
    console.info('Our app is running');
  });
})();

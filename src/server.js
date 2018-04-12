import express from 'express';
import { Server } from 'http';
import path from 'path';
import { renderFile as renderTemplate } from 'ejs';
import socketIo from 'socket.io';

import homeRouter from "./home";

const app = express();
const server = Server(app);
const io = socketIo(server);

app.engine('ejs', renderTemplate);
app.set('view engine', 'ejs');

app.use(homeRouter);

server.listen(process.env.PORT || 3000, () => {
  console.info('Our app is running');
});

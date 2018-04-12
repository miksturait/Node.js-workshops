import express from 'express';
import { renderFile as renderTemplate } from 'ejs';
import homeRouter from "./home";

const app = express();

app.engine('ejs', renderTemplate);
app.set('view engine', 'ejs');
app.use(homeRouter);

export default app;

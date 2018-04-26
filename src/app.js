import express from 'express';
import homeRouter from "./modules/home";

const app = express();

app.set('view engine', 'pug');
app.use(homeRouter);

export default app;

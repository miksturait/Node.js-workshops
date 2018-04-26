import express from 'express';
import homeRouter from "./modules/home";
import listRouter from "./modules/list";

const app = express();

app.set('view engine', 'pug');

app.use(homeRouter);
app.use(listRouter);

export default app;

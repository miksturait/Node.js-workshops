import express from 'express';
import homeRouter from "./home";

const app = express();

app.set('view engine', 'pug');
app.use(homeRouter);

export default app;

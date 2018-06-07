import express from 'express';
import passport from 'passport';
import { json, urlencoded } from 'body-parser'
import homeRouter from "./modules/home";
import listRouter from "./modules/list";
import userRouter from "./modules/user";

const app = express();

app.set('view engine', 'pug');
app.use(json());
app.use(urlencoded({ extended: true }))
app.use(passport.initialize());

app.use(homeRouter);
app.use(listRouter);
app.use('/user', userRouter);

export default app;

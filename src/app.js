import express from 'express';
import passport from 'passport';
import { json, urlencoded } from 'body-parser'
import session from 'express-session';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';
import { getRepository } from 'typeorm'
import homeRouter from "./modules/home";
import listRouter from "./modules/list";
import userRouter from "./modules/user";
import User from './modules/user/user.model';

const app = express();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const repository = getRepository(User);
  const user = await repository.findOne(id);

  done(null, user);
});

app.set('view engine', 'pug');
app.use(cookieParser());
app.use(session({
  secret: 'cantTouchThis',
  saveUninitialized: true,
  resave: true,
}));
app.use(json());
app.use(urlencoded({ extended: true }))
app.use(flash())
app.use(passport.initialize());
app.use(passport.session());

app.use(homeRouter);
app.use(listRouter);
app.use('/user', userRouter);

export default app;

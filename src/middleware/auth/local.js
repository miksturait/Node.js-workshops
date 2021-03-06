import { getRepository } from 'typeorm'
import passport from 'passport'
import { Strategy } from 'passport-local';
import User from '../../modules/user/user.model'

const strategy = new Strategy({
  passwordField: 'password',
  usernameField: 'email',
  session: true,
  passReqToCallback: true,
}, async (req, email, password, done) => {
  const repository = getRepository(User);

  const user = await repository.findOne({
    where: { email }
  });

  if (!user) {
    req.flash('error', 'User not found');
    return done(null, false);
  }

  if (user.password !== password) {
    req.flash('error', 'Password does not match');
    return done(null, false);
  }

  done(null, user);
});

passport.use(strategy);

export default passport.authenticate('local', {
  failureRedirect: '/user/login',
  failureFlash: true,

})

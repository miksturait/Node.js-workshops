import { Router } from 'express';
import { first } from 'lodash'
import localAuth from '../../middleware/auth/local';

const router = Router();

router.post(
  '/login',
  localAuth,
  (req, res) => res.redirect('/')
)

router.get('/login', (req, res) => {
  const errors = req.flash('error');

  res.render('user/login', {
    errors
  });
})

export default router;

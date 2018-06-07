import { Router } from 'express';
import localAuth from '../../middleware/auth/local';

const router = Router();

router.post(
  '/login',
  localAuth,
  (req, res) => {
    res.json('User logged in')
  }
)

router.get('/login', (req, res) => {
  res.render('user/login', {
    error: req.flash('error')
  });
})

export default router;

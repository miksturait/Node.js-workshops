import passport from 'passport'
import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
  console.log(req.user);
  res.render('index', {
    name: 'Coder Dojo'
  });
});

export default router;

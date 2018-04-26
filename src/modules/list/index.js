import { Router } from 'express';
import { getRepository } from 'typeorm';
import List from './list.model';

const router = new Router();

router.get('/list', async (req, res) => {
  const listsRepository = getRepository(List);
  const lists = await listsRepository.find();

  res.send(lists);
});

export default router;

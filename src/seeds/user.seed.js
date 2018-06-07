import faker from 'faker';
import { times, random } from 'lodash';
import { createConnection, getRepository } from 'typeorm';
import User from '../modules/user/user.model';

createConnection().then(async () => {
  const repository = getRepository(User);

  const user = repository.create({
    email: 'test@example.com',
    password: 'Secret99',
  });

  await repository.save(user);
});

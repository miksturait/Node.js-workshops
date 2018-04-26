import faker from 'faker';
import { times, random } from 'lodash';
import { createConnection, getRepository } from 'typeorm';
import List from '../modules/list/list.model';
import Task from '../modules/list/tasks/task.model';

const generateTasks = (num) => times(num, () => new Task(
  0,
  faker.name.findName(),
  random(0, 1, false),
));

createConnection().then(async () => {
  const lists = times(10, () => {
    const list = new List(0, faker.name.findName());
    // list.tasks = generateTasks(5);
    return list;
  })

  const repository = getRepository(List);

  // console.log(lists);

  await repository.save(lists);
});

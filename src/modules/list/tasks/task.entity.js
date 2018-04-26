import { EntitySchema } from 'typeorm';
import Task from './task.model';

module.exports = new EntitySchema({
  name: 'Task',
  target: Task,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
    },
    done: {
      type: 'boolean',
    }
  },
  relations: {
    list: {
      type: 'many-to-one',
      target: 'List',
    }
  }
});

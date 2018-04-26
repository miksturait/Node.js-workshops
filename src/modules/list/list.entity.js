import { EntitySchema } from 'typeorm';
import List from './list.model';

module.exports = new EntitySchema({
  name: 'List',
  target: List,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
    }
  },
  relations: {
    tasks: {
      target: 'Task',
      type: 'one-to-many',
      cascade: true,
    }
  }
})

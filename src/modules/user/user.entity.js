import { EntitySchema } from 'typeorm'
import User from './user.model'

module.exports = new EntitySchema({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    email: {
      type: 'varchar',
      unique: true,
    },
    password: {
      type: 'varchar',
    }
  }
})

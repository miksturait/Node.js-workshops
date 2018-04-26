module.exports = {
  "type": "sqlite",
  "database": "./db/database.sqlite",
  "synchronize": true,
  "logging": false,
  "entities": [
    "src/modules/**/*.entity.js"
  ],
  "migrations": [
    "src/migration/**/*.js"
  ],
  "subscribers": [
    "src/subscriber/**/*.js"
  ],
  "cli": {
    "entitiesDir": "src/modules",
    "migrationsDir": "src/migration",
    "subscribersDir": "src/subscriber"
  }
}

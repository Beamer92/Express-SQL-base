const path = require('path')

module.exports = {
  // add the development config object here
  // include a migrations and seeds directories
  development: {
    client: 'postgresql',
    connection: 'postgresql://localhost/db_name_here',
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}
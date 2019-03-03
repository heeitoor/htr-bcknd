// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "ec2-54-204-41-109.compute-1.amazonaws.com",
      port: "5432",
      database: "dhlekqo6cc1bp",
      user: "yqgwqilvtbdzdz",
      password: "3fc3d74a294b7e7d3c3cfa8376737233ec898e131a58b2ead1708e73826ade23",
      ssl: true
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};

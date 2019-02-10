// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "ec2-54-243-228-140.compute-1.amazonaws.com",
      port: "5432",
      database: "dbc5g3rhcqdmjk",
      user: "ellltvtputtemb",
      password: "14dba0e9d0bf40d3570c0f349c9ec20b9154602c594a5210a3c67d7b7b2e5f3a",
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

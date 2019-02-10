const pg = require("pg");

pg.defaults.ssl = true;

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "ec2-54-243-228-140.compute-1.amazonaws.com",
    port: "5432",
    database: "dbc5g3rhcqdmjk",
    user: "ellltvtputtemb",
    password: "14dba0e9d0bf40d3570c0f349c9ec20b9154602c594a5210a3c67d7b7b2e5f3a",
    ssl: true
  },
  searchPath: ["knex", "public"]
});

//This file will bundled all the scehmas defined inside the model directory along with a db connection
const Sequelize = require("sequelize");
const dbConfig = require("../configs/db.config");

//extracting the db configurations from the dbConfig
const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, dialect, pool } =
  dbConfig;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: dialect,
  port: DB_PORT,
  pool: {
    min: pool.min,
    max: pool.max,
    acquire: pool.acquire,
    idle: pool.idle,
  },
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

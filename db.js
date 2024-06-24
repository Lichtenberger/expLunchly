/** Database for lunchly */

const { Client } = require("pg");

const db = new Client("postgresql:///lunchly");

db.connect();

module.exports = db;

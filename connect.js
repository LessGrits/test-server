const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://jgkpjcskmxyyki:3cb084bc3b1718b861754df31063fee3cb014b497629becf0082ab83f850f438@ec2-54-75-246-118.eu-west-1.compute.amazonaws.com:5432/db2e84e57328bj",
  ssl: {
    rejectUnauthorized: false
  }
});

// client.connect()
//   .then(()=>console.log('connection success'))
  /*.then(()=> client.query(
    `CREATE TABLE Hotdogs (
    hotdog_id SERIAL PRIMARY KEY,
    name varchar(255) NOT NULL,
    photo_url varchar(255),
    description varchar(255),
    price int
    );`
  ))*/
  // .catch(e => console.error(e))
  //
  // .then(()=> client.query('SELECT * FROM Hotdogs '))
  // .then( results => console.table(results.rows));

module.exports = client;

//credentials:url DATABASE
// "dbname=db2e84e57328bj host=ec2-54-75-246-118.eu-west-1.compute.amazonaws.com port=5432 user=jgkpjcskmxyyki password=3cb084bc3b1718b861754df31063fee3cb014b497629becf0082ab83f850f438 sslmode=require"
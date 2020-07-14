const { Client } = require('pg');
const { dbUrl } = require('./config');

const client = new Client({
  connectionString: dbUrl,
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


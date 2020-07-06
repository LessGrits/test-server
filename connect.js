const { Client } = require('pg');

const client = new Client({
  connectionString: "postgres://fqrhdnsneuoypj:d913d6099fa5af0f8ef796026892c96e1189f057d2fdd61a14c73ea034e647b5@ec2-34-248-165-3.eu-west-1.compute.amazonaws.com:5432/d88qnu6ea7nmls",
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
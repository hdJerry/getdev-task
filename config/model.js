const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgres://jvmsevdfbiikwx:98e37a798cd3d8fb8ca28c1e4f3b470166875232cdace71ce4ac6d01c1ffae22@ec2-35-172-85-250.compute-1.amazonaws.com:5432/d1gee34930281a',
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {

  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

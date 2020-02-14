const { Client } = require('pg');



console.log(process.env.VUE_APP_DATABASE_URL);
const client = new Client({
  connectionString: "postgres://jvmsevdfbiikwx:98e37a798cd3d8fb8ca28c1e4f3b470166875232cdace71ce4ac6d01c1ffae22@ec2-35-172-85-250.compute-1.amazonaws.com:5432/d1gee34930281a" || prcess.env.VUE_APP_DATABASE_URL,
  ssl: true,
});

client.connect();

const createTables = async () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS
      expenses(
        id SERIAL PRIMARY KEY,
        reason VARCHAR(128) NOT NULL,
        cost INT NOT NULL,
        vat VARCHAR(128) NOT NULL,
        discount VARCHAR(128) NOT NULL,
        date DATE
      )`;

      let resp = await client.query(queryText);
      if(resp){
        // console.log(res);

        return{
          status : 1,
          message : "Expenses table created",
          datas : resp
        }

      }else {
        return {
          status : 0,
          message : "Failed to create Table"
        }

      }
}


const dropTables = async () => {
  const queryText = 'DROP TABLE IF EXISTS expenses';
let resp = await client.query(queryText);
  if(resp){
    // console.log(res);

    return{
      status : 1,
      message : "Expenses table deleted"
    }

  }else {
    return {
      status : 0,
      message : "Failed to Delete expenses table"
    }

  }
}



const insertintoTables = async (datas) => {
  const queryText =
    `INSERT INTO
      expenses(
        reason,
        cost,
        vat,
        discount,
        date
      ) values ('${datas.reason}','${datas.cost}','${datas.discount * Number(datas.cost)}','${datas.discount}','${datas.date}')`;

  let resp = await client.query(queryText)

  if(resp){
    // console.log(res);

    return{
      status : 1,
      message : "Saved Expenses",
      datas : resp
    }

  }else {
    return {
      status : 0,
      message : "Failed to save"
    }

  }

}

// insertintoTables(datas);



const findTables = async (datas) => {

  let resp = await client.query('SELECT * FROM expenses');
let sum = await client.query('SELECT SUM(cost) as totalexpenses FROM expenses');

// console.log(sum);

let datax = {
  rows : resp.rows,
  sum : sum.rows[0]['totalexpenses']
}



// console.log(datax);

if(resp && sum){

  return{
    status : 1,
    message : "Loaded Expenses",
    datas : datax
  }

}else {

  return {
    status : 0,
    message : "Failed to Load"
  }

}


}


module.exports = {
  insertintoTables,
  dropTables,
  createTables,
  findTables
}

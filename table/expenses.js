
const path = require('path');

let functions = require(path.join(__dirname,'../config','model.js'))


module.exports = (app)=>{

  app
  .post('/save/expenses', saveExpenses)


}



function saveExpenses(req,res){

  let datas = req.body;


  console.log(datas);

  // functions
  // .insertintoTables(datas)
  // .then((resp)=>{
  //
  // })
  // .catch((err)=>{
  //
  // })

}

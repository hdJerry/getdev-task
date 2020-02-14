import axios from 'axios';



let urlA = process.env.VUE_APP_POST_URLA;

let urlB = process.env.VUE_APP_POST_URLB;


console.log(urlA);


function builUrlA( path ){
  return `${urlA}${path}`
}

function builUrlB( path ){
  return `${urlB}${path}`
}


export default {

  addExpenses(credentials,path){

    let url = builUrlA(path);

    // console.log(credentials);
    // console.log(url);

    return axios.post( url, credentials, {
            useCredentails: true
        }).then(res => res.data)
  },
  getAllExpenses(credentials,path){

    let url = builUrlA(path);

    return axios.post( url, credentials, {
            useCredentails: true
        }).then(res => res.data)
  }
}

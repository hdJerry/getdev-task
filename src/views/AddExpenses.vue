<template>
  <div class="about">
    <div class="container">

      <br>

      <div v-if="success == 1" class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{{ exclaim }}</strong> {{ message }}.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click.prevent="clearAlert">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div v-if="success == 0" class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>{{exclaim}}</strong> {{ message }}.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click.prevent="clearAlert">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>



    <form action @submit.prevent="createNow">


       <div class="form col-md-6">

         <h2>Get Started</h2>
         <h4>Add expenses with just few forms.</h4>

         <br>

         <div class="form-group">
           <label for="firstname">Date</label>
           <input type="date" name="date" v-model="date" class="form-control details" id="date">
         </div>
         <div class="form-group">
           <label for="lastname">VALUE</label>
           <input type="text" name="cost" v-model="cost" @input="calVat" class="form-control details" id="cost">
         </div>
         <div class="form-group">
           <label for="lastname">VAT</label>
           <input type="text" name="vat" v-model="vat" class="form-control details" id="vat" :disabled="cannot">
         </div>

         <div class="form-group">
           <label for="email">Reason</label>
           <textarea name="reason" v-model="reason" class="form-control details" id="reason" col="8" row="5"></textarea>
         </div>
         <button class="btn btn-success btn-block" v-if="!isCreating">Add Expenses</button>
         <button class="btn btn-success btn-block" type="button" disabled v-else>
          <span class="spinner-grow text-primary" role="status" aria-hidden="true"></span>
          Submittng ...
        </button>
      </div>
    </form>

    </div>
  </div>
</template>




<script type="text/javascript">

import api from '../api';


export default{
  data () {
    return {
      datas : [],
      date:'',
      cost : 0,
      reason : '',
      vat: 0,
      success : 2,
      isCreating: false,
      message : "",
      exclaim : "",
      cannot : true
    }
  },
  methods:{

    calVat(event){

      let value = event.target.value;

      // console.log(());
      // if(this.cost > 0  || this.cosVt !== ""){
      //   this.vat = 0.20 * this.cost
      //
      // }else {
      //
      //   // this.cost = 0
      //   this.vat = 0
      // }

    },

    async createNow(){
      this.isCreating = true;

      // let employees = JSON.parse(localStorage.getItem('employees'));
      // let finalArr = Array.from(employees);

      if(
        this.cost !== 0 &&
        this.reason.trim() !== "" &&
        this.date.trim() !== ""
      ){

        let datas = {
          cost : this.cost,
          reason : this.reason,
          date : this.date
        }

        api
        .addExpenses(datas,'save/expenses')
        .then((resp)=>{

          if(resp.status === 1){

            localStorage.setItem('expenses',JSON.stringify(resp.datas.rows))
            localStorage.setItem('sum',JSON.stringify(resp.datas.sum))

          }

          console.log(resp);

        })
        .catch((err)=>{

          console.log(err);

        })


      }else {

        // console.log("okay");

        this.message ="Please Ensure you fill all fields properly";
        this.exclaim = "Holy guacamole!"

        this.success = 0;
        this.isCreating = false;

      }


    },
    clearAlert(){
      this.success = 2;
    },

  }

}


// sessionStorage.setItem('user',JSON.stringify(data.data));

</script>


<style media="screen">

label{
  font-size: 0.8em;
}

  .form{
    margin : 20px auto;
  }
</style>

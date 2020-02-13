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
           <input type="date" name="date" value="" v-model="date" class="form-control details" id="date">
         </div>
         <div class="form-group">
           <label for="lastname">VALUE</label>
           <input type="text" name="cost" v-model="cost" value="" class="form-control details" id="cost">
         </div>

         <div class="form-group">
           <label for="email">Reason</label>
           <textarea name="reason" value="" v-model="reason" class="form-control details" id="reason" col="8" row="5"></textarea>
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

let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default{
  data () {
    return {
      datas : [],
      date:'',
      cost : '',
      reason : '',
      success : 2,
      isCreating: false,
      message : "",
      exclaim : "",
    }
  },
  methods:{

    async createNow(){
      this.isCreating = true;

      // let employees = JSON.parse(localStorage.getItem('employees'));
      // let finalArr = Array.from(employees);

      if(
        this.cost.trim() !== "" &&
        this.reason.trim() !== "" &&
        this.date.trim() !== ""
      ){

        let datas = {
          cost : this.cost,
          reason : this.reason,
          date : this.date
        }

        console.log(datas);


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

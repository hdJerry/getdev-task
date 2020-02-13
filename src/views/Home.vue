
<template>
  <div class="dashboard">


    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-8 col-sm-8">
          <div class="card text-center text-white bg-success mb-3">

            <div class="card-body">
              <h4 class="expTitle">TOTAL EXPENSES</h4>
              <p class="expAmount">{{ abbreviateNumber(totalExp) }}</p>

            </div>


          </div>

        </div>
      </div>


      <br>
      <h4>User Expenses List</h4>

      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">DATE</th>
            <th scope="col">VALUE</th>
            <th scope="col">REASON</th>
            <th scope="col">DISCOUNT</th>
            <th scope="col">VALUE DISCOUNTED</th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="(exp,i) in paginationData" :key="i">
            <td>{{exp.date}}</td>
            <td>{{exp.cost}}</td>
            <td>{{exp.reason}}</td>
            <td>{{exp.discount}}</td>
            <td>{{exp.cost * exp.discount}}</td>
          </tr>
        </tbody>
      </table>
      <div class="d-flex flex-row-reverse"  v-if="paginationData.length != datas.length">
        <button type="button" class="btn btn-secondary" @click.prevent="prevPage(paginationData.length)" :disabled="currentPage === 0">prev</button>
        <button type="button" class="btn btn-secondary"  @click.prevent="nextPage(paginationData.length)" :disabled="currentPage >= pageCount -1">next</button>
      </div>


    </div>

    <div class="floatBtn">

      <a href="/addexpenses">+</a>

    </div>

  </div>
</template>

<script>

import mixinstunts from '../mixins/core'

export default {
  data () {
    return {
      datas : [],
      totalExp : 0
    }
  },
  created(){

  },
    beforeMount(){

      let expenses = JSON.parse(localStorage.getItem('expenses'));
      let sumexpenses = JSON.parse(localStorage.getItem('sum'));
      // console.log(expenses);

      if(expenses == null || expenses == 'undefined'){


        this.datas = [];
        localStorage.setItem('expenses',JSON.stringify([]));
      }else{
        // console.log("okay");

        if(expenses.length > 0){
          this.datas = expenses;
          this.totalExp = sumexpenses.sum;

        }

        // console.log("keeeeeerrrrtttt");
      }
    },
  mounted() {

  },
  mixins:[mixinstunts]
}
</script>

<style>
/* @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'); */

.expTitle{
  margin-top: 20px;
  font-size: 1.2rem;
}

.expAmount{
  font-size: 1.6rem;
  font-weight: bold;
}


.trash{
  font-size: 25px;
  color: red;
  cursor : pointer;
}

.floatBtn{
  position: absolute;
  right: 20px;
  bottom: 60px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #28a745;
  font-size: 2.0em;
  text-align:center;
  transition: all .5s ease-in-out;
}

.floatBtn a:link{

  text-decoration: none;
}

.floatBtn:hover{
  transform: translateY(5px);
  /* color: #fff!important; */
}
.floatBtn a{
  display: block;
 transform: translateY(0px);
 color: #fff;
}

</style>

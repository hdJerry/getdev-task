<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
       <span style="font-size:30px;cursor:pointer; color: white" @click="openNav()">&#9776;</span>
      <a class="navbar-brand" href="#" >
        <img src="https://clipartart.com/images/cost-saving-clipart-9.png" width="50" height="50">
      </a>
      <div>
        <!-- <img :src="$auth.user.picture" width="30" height="30">
        <span class="text-muted font-weight-light px-2">{{$auth.user.name}}</span> -->
        <!-- <button type="button" class="btn btn-outline-secondary btn-sm text-white">Occupy</button> -->
        <!-- <router-link class="btn btn-outline-secondary btn-sm text-white routes" to="/">Dashboard</router-link>

        <router-link to="/addexpenses" class="btn btn-outline-secondary btn-sm text-white routes"> Add Expenses </router-link> -->
      </div>
    </nav>




    <div id="mySidenav" class="sidenav">
      <br>
      <br>
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <router-link class="routes" to="/">Dashboard</router-link>
      <br>
      <router-link to="/addexpenses" class="routes"> Add Expenses </router-link>
    </div>

    <div class="" id="main">

      <router-view />


    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  beforeMount(){

  },
  methods: {
    openNav(){
        document.getElementById("mySidenav").style.width = "150px";
        document.getElementById("main").style.marginLeft = "200px";
      },
      closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }
  }
}
</script>


<style media="screen">

/* @import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'); */

body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}


.sidenav .routes{
  padding: 8px 0px 8px 15px;
  background:
       linear-gradient(
         to right,
        green 0%,
        green  5px,
         transparent 5px
       );
      background-repeat: repeat-x;
      background-size: 100%;
    color: #fff;
    text-decoration: none;
    display: block;
  transition: 1s;
  font-size: 14px;
}

.sidenav .routes:hover {
  /* color: #f1f1f1; */
  background:
     linear-gradient(
       to right,
       green 0%,
       green 5px,
       transparent
     );
}

.sidenav .closebtn {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 15px;
  color: #fff;
  display: block;
  transition: 0.5s;
}

.sidenav .closebtn:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>

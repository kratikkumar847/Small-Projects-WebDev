<template>
  <div class="container">
    <div class="name">
      <p class="display-2 text-center">Samrat Ashok Technological Institute</p>
    </div>
    <br><br><br>
    <div class="image">
      <img src="../images/CollegeLogo.jpg" alt="College Logo"  class="rounded mx-auto d-block" >
    </div>
    <br><br>
    <div class="items">
      <p>Click Here to 
        <router-link to="/ViewResult" >
          Check Result
        </router-link>
      </p>
      <p>Click Here to 
        <router-link to="/FacultyLogin" >
          Faculty Login
        </router-link>
      </p>
      <p>Click Here to 
        <router-link to="/FacultySignUp" >
          Faculty SignUp
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  data() {
    return {
     
    };
  },
  methods: {
    
  },
};
</script>

<style scoped>
  .name {
    width: 100vw;
    background-color: grey;
    height: 100px;
  }

  * {
    margin: 0;
    padding: 0;
  }

  .image,.items {
    text-align: center;
    margin-left: 160px;
  }

   
</style>
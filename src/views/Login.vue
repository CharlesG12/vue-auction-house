<template>
  <div class="login">
    <div class="container">
      <h3>LOGIN</h3>
      <div>
        <div class="form-group">
          <label>Name</label>
          <input type="text" v-model="name" class="form-control" placeholder="Enter name">
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" v-model="email" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" class="form-control" placeholder="Password">
        </div>
        <button @click="login" class="btn btn-primary">Login</button>
        <button @click="register" class="btn btn-primary">Register</button>
         <div class="form-group pwsretrive">
          <label @click="retrievepassword">forget password</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "login",
  data() {
    return {
      name: "Froja",
      email: 'Froja@gmail.com',
      password: 'Froja'
    }
  },
  methods: {
    register() {
      this.$router.push({path: '/register'})
    },

    login() {
      axios({
        method: 'post',
        url: "http://localhost:3030/authentication",
        data: {
          "strategy": "local",
          "email": this.email,
          "password": this.password
        }
      })
      .then(({ data }) => {
        this.$store.dispatch("updateToken", data.accessToken)
        this.$store.dispatch("updateProfile", { name: this.name, email: this.email })
        this.$router.push({path: '/'})
      })
      .catch((error) => {
        console.log("error");
      })
    },
    retrievepassword(){
      this.$router.push({path: "/forgotpassword"})
    }
  }
}
    
</script>

<style lang="scss">
.login {
  color: #000;
  text-align: left;

  .container {
    width: 200px;
    padding: 10px;
    margin: 10px auto;

  }
}
</style>
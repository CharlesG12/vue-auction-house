<template>
  <div class="register">
    <div class="container">
      <h3>Register</h3>
      <div>
        <div class="form-group">
          <label>User Name</label>
          <input type="text" v-model="name" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" v-model="email" class="form-control" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" class="form-control" placeholder="Password">
        </div>
        <button type="submit" @click="register" class="btn btn-primary">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "register",
  data() {
    return {
      name: "charles",
      email: "charles@gmail.com",
      password: "charles"
    }
  },
  methods: {
    register() {
       axios({
        method: 'post',
        url: "http://localhost:3030/users",
        data: {
          "username": this.name,
          "email": this.email,
          "password": this.password
        }
      })
      .then(axios({
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
      }))
      .catch((error) => {
        console.log("error");
      })
    },
    retrievepassword(){
      alert("retrieve password")
    }
    }
}
    
</script>

<style lang="scss">
.register {
  color: #000;
  text-align: left;

  .container {
    width: 200px;
    padding: 10px;
    margin: 10px auto;
  }
}
</style>
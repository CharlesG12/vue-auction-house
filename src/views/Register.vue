<template>
  <div class="register">
    <div class="container">
      <h3>LOGIN</h3>
      <form>
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
        <button type="submit" @click="login" class="btn btn-primary">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name: "register",
  data() {
    return {
      email: null,
      password: null,
      name: null
    }
  },
  methods: {
    login() {
      
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
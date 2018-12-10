<template>
  <div class="admin-login">
    <div class="container">
      <h3>LOGIN</h3>
      <form>
        <div class="form-group">
            <label>Admin Login</label>
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
  name: "login",
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    login() {
      
    }
  }
}
    
</script>

<style lang="scss">
.admin-login {
  color: #000;
  text-align: left;

  .container {
    width: 200px;
    padding: 10px;
    margin: 10px auto;
  }
}
</style>
<template>
  <div class="forgotpassword">
    <div class="container">
      <p>Retrive Password</p>
      <div>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" v-model="email" class="form-control" placeholder="Enter email">
        </div>
        <button @click="getpassword" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "forgotpassword",
  data() {
    return {
      email: 'Froja@gmail.com',
    }
  },
  methods: {
    getpassword() {
      alert("Check email inbox for temporary password")
      let_url = "http://localhost:3030/users/?email=" + this.email
      axios.get(let_url)
    }
  }
}
    
</script>

<style lang="scss">
.forgotpassword {
  color: #000;
  text-align: left;

  .container {
    width: 200px;
    padding: 10px;
    margin: 10px auto;

  }
}
</style>
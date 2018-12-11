<template>
  <div id="app">
    <div id="nav">
      <router-link :to="'/'"><span>Home</span></router-link>
      <router-link :to="'/profile'"><span>Profile</span></router-link>
      <router-link :to="'/sale'"><span>Post New</span></router-link>
      <router-link :to="'/mysales'"><span>My Sales</span></router-link>
      <router-link :to="'/itemtable'"><span>Items Table</span></router-link>
      <router-link :to="'/schedule'"><span>Auction Schedule</span></router-link>
      <a v-if="!$store.getters.getToken" class="login" @click="login">Login</a>
      <a v-else class="logout" @click="logout">Logout</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    logout() {
      this.$store.dispatch("updateToken", null)
      this.$router.push({path: '/'})
      this.$store.state.isAdmin = false
      alert("You are log out now!")
      // this.$router.push({path: '/'})
    },

    login() {
      this.$router.push({path: '/login'})
    }
  },
  components: {}
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Carter+One');

body {
  margin: 0;
  background-color: #fff;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;

  #nav {
    width: 100%;
    padding: 5px;
    background-color: #fff;
    margin: 0 auto;
    box-shadow: 0 0 7px 0 #0000007a;
    font-family: 'Carter One', cursive;

    a {
      font-size: 12px;
      color: #444;
      margin: 10px;
      padding: 2px 10px;
      text-decoration: none;

      &:hover {
        text-decoration: none;
        background-color: rgb(96, 170, 255);
        color: #fff;
        border-radius: 30px;
      }
    }

    .logout {
      position: absolute;
      top: -3px;
      right: 0;
      color: #fff;
      background-color: rgb(153, 0, 0);
      border-radius: 50px;
      cursor: pointer;

      &:hover {
        background-color: rgb(102, 0, 0);
      }
    }

    .login {
      position: absolute;
      top: -3px;
      right: 0;
      color: #fff;
      background-color: rgb(96, 170, 255);
      border-radius: 50px;
      cursor: pointer;

      &:hover {
        background-color: rgb(44, 90, 143);
      }
    }
  }
}
</style>

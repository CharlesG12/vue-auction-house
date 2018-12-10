<template>
  <div id="app">
    <div id="nav">
      <router-link :to="'/'"><span>Home</span></router-link>
      <router-link :to="'/user'"><span>Profile</span></router-link>
      <router-link :to="'/sale'"><span>Post New</span></router-link>
      <router-link :to="'/listSale'"><span>Sale Items</span></router-link>
    </div>
    <router-view/>
    <!-- <bidding-card name="china"
      :image="require('@/assets/pics/dish_1.jpg')"
      desciption="In the seventeenth century, Iranian imitations of Chinese blue-and-white export porcelain increased markedly."
      initialPrice="20000"
      startDate="Dec 08 2018 13:20">
    </bidding-card> -->
  </div>
</template>

<script>
export default {
  name: "app",
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
    }
    
    a:hover {
      text-decoration: none;
      background-color: rgb(96, 170, 255);
      color: #fff;
      border-radius: 30px;
    }
  }
}
</style>

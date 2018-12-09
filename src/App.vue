<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><span>Home</span></router-link>
      <router-link to="/user"><span>Profile</span></router-link>
      <router-link to="/sale"><span>Post New Item</span></router-link>
      <router-link to="/listSale"><span>My Sale Items</span></router-link>
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
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#nav {
  width: 100%;
  height: 25px;
  background-color: #fff;
  margin: 0 auto;
  font-family: "Bree Serif", serif;
  box-shadow: 0 0 7px 0 #cfcfc4;
  
  span {
    color: #000;
    margin: 10px;
    text-decoration: none;
  }
}
</style>

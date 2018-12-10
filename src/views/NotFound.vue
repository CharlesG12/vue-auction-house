<template>
  <div class="NotFound">
    <div class="container">
      <h1>404</h1>
      <h3>Page Not Found!</h3>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
}
    
</script>

<style lang="scss">
.NotFound {
  color: rgb(148, 148, 148);
  text-align: left;
  font-family: 'Carter One', cursive;

  .container {
    width: 800px;
    padding: 10px;
    margin: 10px auto;

    h1 {
      text-align: center;
      font-size: 13em;
    }

    h3 {
      text-align: center;
    }
  }
}
</style>
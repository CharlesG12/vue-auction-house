<template>
  <div class="adminschedule">
    <div class="container">
      <h3>Edit Schedule</h3>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "adminschedule",
  data() {
    return {
      email: 'siiam@gmail.com',
      password: 'sam'
    }
  },
  methods: {
    login() {
      
    }
  },
  mounted() {
    if( this.$store.state.isAdmin === false ){
      this.$router.push({path: '/admin'})
    }
  }
}
    
</script>

<style lang="scss">
.adminschedule {
  color: #000;
  text-align: left;

  .container {
    width: 200px;
    padding: 10px;
    margin: 10px auto;
  }
}
</style>
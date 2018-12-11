<template>
  <div class="adminschedule">
    <div class="container">
      <h3>Edit Schedule</h3>
      <table-component
        :data="this.$store.state.timeslots"
        sort-by="date"
        sort-order="asc">
        <table-column show="date" label="Date"></table-column>
        <table-column show="start_time" label="Start Time"></table-column>
        <table-column show="end_time" label="End Time"></table-column>
        <table-column show="editUrl" label="" :sortable="false" :filterable="false"></table-column>
    </table-component>
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
  created() {
    this.interval = setInterval(() => this.$store.dispatch("getAllTimeSlots"), 5000);
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
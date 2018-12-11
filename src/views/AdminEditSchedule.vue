<template>
  <div class="adminschedule">
    <div class="container">
      <table-component
        :data="this.$store.getters.getauctionschedule"
        sort-by="date"
        sort-order="asc">
        <table-column show="date" label="Date"></table-column>
        <table-column show="start_time" label="Start Time"></table-column>
        <table-column show="end_time" label="End Time">
        </table-column>
    </table-component>
    <div class="row"> 
      <input type='date' v-model="selectDate" class="form-control col" />
      <input type='text' v-model="startTime" class="form-control col" />
      <input type='text' v-model="endTime" class="form-control col" />
      <button class="btn btn-primary col" @click="add">Add</button>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: "adminschedule",
  data() {
    return {
      selectDate: "",
      startTime: "",
      endTime: ""
    }
  },

  created() {
    this.$store.dispatch("getAllTimeSlots")
  },

  methods: {
    add() {
      console.log(this.selectDate)
      console.log(this.startTime)
      console.log(this.endTime)

      let _token = this.$store.state.token
      let _url = "http://localhost:3030/auctions"

      axios({
              method: "post",
              url: _url, 
              headers: {"Authorization": _token},
              data: {
                date: this.selectDate,
                start_time: this.startTime,
                end_time: this.endTime
              }
            })
            .then(function (response) { 
              console.log(response)
              this.$store.dispatch("getAllTimeSlots")
            })
            .catch(function (error) {
              console.log(error);
            });



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
@import 'table-component';
.adminschedule {
  color: #000;
  text-align: left;

  .container {
    width: 600px;
    padding: 10px;
    margin: 10px auto;
  }
}
</style>
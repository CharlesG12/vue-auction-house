<template>
  <div class="schedule">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "schedule",
  data() {
    return {
      auction_schedule: ["hi"]
    }
  },
  created() {
    this.$store.dispatch("getAllTimeSlots")
    console.log("!!!!!!!!")
    let _data = this.$store.getters.getauctionschedule
    
    console.log( this.auction_schedule )
    console.log( _data )
    this.auction_schedule  = _data
    
    this.interval = setInterval(() => this.$store.dispatch("getAllTimeSlots"), 5000);
  },
  methods: {
    getschedule() {
      let _schedule = this.$store.getters.getauctionschedule
      console.log(_schedule)
      return _schedule
    }
  },
}
    
</script>

<style lang="scss">
@import 'table-component';
.schedule {
  color: #000;
  text-align: left;

  .container {
    width: 600px;
    padding: 10px;
    margin: 10px auto;
  }
}
</style>
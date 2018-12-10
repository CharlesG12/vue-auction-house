<template>
  <div class="schedule">
    <p>Auction Schedule</p>
  </div>
</template>

<script>

export default {
  name: "schedule",
  methods: {
    editProfile() {
      this.$router.push({path:"/editprofile"})
    }
  },
  computed: {
    getprofile() {
      console.log(this.$store.getters.getProfile)
      return this.$store.getters.getProfile
    }
  }
};
</script>

<style lang="scss">
.schedule {
  width: 80%;
  margin: 0 auto;
  color: black;

  .card {
    margin: 10px auto;
  }

}
</style>

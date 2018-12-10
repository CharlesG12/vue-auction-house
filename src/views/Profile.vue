<template>
  <div class="profile">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ getprofile.name }}'s profile</h5>
        <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
        <p class="card-text">Email: {{ getprofile.email }}</p>
        <button type="button" class="btn btn-info" @click="editProfile">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "profile",
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
.profile {
  width: 80%;
  margin: 0 auto;
  color: black;

  .card {
    margin: 10px auto;
  }

}
</style>

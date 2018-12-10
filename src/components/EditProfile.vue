<template>
  <div class="editprofile">
    <div class="container">
      <div>
        <div class="form-group">
          <label>UserName</label>
          <input type="Text" v-model="name" class="form-control" placeholder="Enter Name">
        </div>
        <div class="form-group">
          <label>EmailAddress</label>
          <input type="email" v-model="email" class="form-control" placeholder="Enter Email">
        </div>
        <!-- <div class="form-group">
          <label>Password</label>
          <input type="password" v-model="password" class="form-control" placeholder="Password">
        </div> -->
        <button @click="submitChange" class="btn btn-primary">Submit Change</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "editprofile",
  data() {
    return {
        name: this.$store.getters.getProfile.name,
        email: this.$store.getters.getProfile.email,
    }
  },
  methods: {
    submitChange() {
      this.$store.dispatch("updateProfile", { name: this.name, email: this.email });
      this.$router.push({path: "/profile"})
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
.editprofile {
  color: #000;
  text-align: left;

  .container {
    width: 200px;
    padding: 10px;
    margin: 10px auto;

  }
}
</style>

<template>
  <div class="selling-card">
    <div class="upper-box"
      :style="{ 'background-image': `url('${image}')` }">
    </div>
    <div class="lower-box">
      <div class="info">
        <h3 class="title">{{ name }}</h3>
        <h3 class="start-date">Start at: {{ startDate }}</h3>
        <div> </div>
        <Countdown :end="startDate"></Countdown>
      </div>
      <div class="delete" @click="delteItem">
        <span>DELETE</span>
      </div>
    </div>
  </div>
</template>

<script>
import Countdown from "@/components/Timer.vue";
import axios from "axios"

export default {
  name: "selling-card",
  components: { Countdown },
  methods: {
    delteItem: function(event) {
      if (event) {
        console.log(this.id)
        // this.$store.dispatch("deleteSaleItem", parseInt(this.id))
        let _url = "http://localhost:3030/postitems/" + this.id;
        let _token = this.$store.state.token
        axios.delete(_url, {headers : { "authorization" : _token }})
        .then((response) => {
          this.$emit('delete')
        })
      }
    }
  },
  props: ["id", "name", "startDate", 'startPrice', "image", "description"]
};
</script>

<style lang="scss">
.selling-card {
  width: 200px;
  height: 350px;
  background-color: #111;
  border-radius: 5px;
  margin: 15px;
  box-shadow: 0 0 7px 0 #0000007a;
  overflow: hidden;

  .lower-box {
    width: 100%;
    height: 35%;
    margin: 0;
    position: relative;

    .info {
      width: 100%;
      margin: 0px;

      .title {
        font-size: 14px;
        margin: 5px;
      }

      .start-date {
        font-size: 8px;
        margin: 3px;
      }
    }

    .delete {
      position: absolute;
      bottom: 15px;
      left: 50px;
      background-color: rgb(139, 0, 0);
      border-radius: 50px;
      width: 100px;
      height: 28px;
      padding: 4px;
      cursor: pointer;

      span {
        color: #fff;
        font-family: 'Carter One', cursive;
        font-size: 12px;
        float: top;
        padding: 0px;
        position: relative;
        top: -3px;
        margin: 0 auto;
        font-weight: lighter;
      }

      &:hover {
        background-color: rgb(80, 0, 0);
      }
    }
  }

  .upper-box {
    width: 100%;
    height: 65%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>

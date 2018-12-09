<template>
  <div class="selling-card">
    <div class="left-box">
      <div class="info">
        <h3 class="title">{{ name }}</h3>
        <h3>{{ startDate }}</h3>
        <h3>{{ id }}</h3>
        <div> </div>
        <Countdown :end="startDate"></Countdown>
      </div>
      <div class="bu">
          <div class="button" @click="delteItem">
            <span>DELETE</span>
          </div>
      </div>
    </div>
    <div class="right-box"
      :style="{ 'background-image': `url('${image}')` }">
    </div>
  </div>
</template>

<script>
import Countdown from "@/components/Timer.vue";

export default {
  name: "selling-card",
  components: { Countdown },
  methods: {
    delteItem: function(event) {
      if (event) {
        console.log(this.id)
        this.$store.dispatch("deleteSaleItem", parseInt(this.id))
      }
    }
  },
  props: ["id", "name", "startDate", 'startPrice', "image", "description"]
};
</script>

<style lang="scss">
.selling-card {
  width: 580px;
  height: 230px;
  background-color: #000;
  border-radius: 2px;
  margin: 15px;
  box-shadow: 0 0 7px 0 #cfcfc4;
  overflow: hidden;
  font-family: "Bree Serif", serif;
  text-transform: uppercase;

  .left-box {
    float: left;
    width: 45%;
    height: 100%;
    margin: 0;

    .info {
      height: 75%;
      width: 100%;
      margin: 0px;
      position: relative;

      .title {
        margin-top: 5px;
      } 
    }

    .bu {
      height: 25%;

      .button {
      background-color: #f9b226;
      width: 100px;
      height: 40px;
      margin: 0 auto;
      border-radius: 2px;
      padding: 0px;
      position: relative;

        span {
          color: black;
          font-size: 1em;
          float: top;
          padding: 0px;
          position: relative;
          top: 7px;
          margin: 0 auto;
          font-weight: lighter;
        }

      }
    }

    .button:hover {
      border-color: white;
      border-style: solid;
      border-width: 0.5px;
      cursor: pointer;
      span {
        color: white;
      }
    }

    h3,
    Countdown {
      color: #fff;
      font-weight: lighter;
    }
  }

  .right-box {
    float: left;
    width: 55%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}
</style>

<template>
  <div class="bidding-card">
    <div class="left-box">
      <div class="info">
        <h3 class="title">{{ name }}</h3>
        <h3>{{ startDate }}</h3>
        <div> </div>
        <Countdown :end="startDate"></Countdown>
      </div>
      <div class="bu">
          <div class="button" @click="enterbid">
            <span>BID</span>
            <div>NOW</div>
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
  name: "bidding-card",
  components: { Countdown },
  methods: {
    enterbid: function(event) {
      if (event) {
        console.log("click bid");
        this.$router.push({ path: `bidding/${this.id}` })
      }
    }
  },
  props: ["id", "name", "startDate", "image", "description"]
};
</script>

<style lang="scss">
.bidding-card {
  width: 580px;
  height: 250px;
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
          font-size: 0.7em;
          float: top;
          padding: 0px;
          position: relative;
          top: -3px;
          margin: 0 auto;
          font-weight: lighter;
        }

        div {
          color: black;
          margin: 0px;
          font-size: 1.2em;
          margin: 0 auto;
          position: relative;
          top: -10px;
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

      div {
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

<template>
  <div class="buy">
    <div class="date-selection">
      <input type='date' class="form-control"/>
      <span>to</span>
      <input type='date' class="form-control" />
      <button class="btn btn-primary" @click="search">Search</button>
    </div>
    <div class="bidItemsSection">
      <bidding-card v-for="(item, index) in this.$store.state.items"
        :key=index
        :id="item.id"
        :name="item.name"
        :image="item.image"
        :startDate="item.startDate">
      </bidding-card>
    </div>
  </div>
</template>

<script>
import MyCarousel from "@/components/Carousel.vue";

export default {
  name: "home",
  data() {
    return {
      selectedDates: {
        start: new Date(),
        end: null
      }
    }
  },
  created() {
    this.$store.dispatch("updateItems")
    this.interval = setInterval(() => this.$store.dispatch("updateItems"), 5000);
  },
  methods: {
    updateSellItems() {
      // console.log("hi")
      // console.log(this.selectedDates)
      // let range = this.$store.state.sell_date_range
      // this.$store.dispatch("getSellItemsInRange", range)
    },
    search() {
      this.$store.dispatch("updateItems")

      
    }

  },
  computed: {
    getbuyItems() {
      // console.log( this.$store.getters.buyitemResult )
      // return this.$store.getters.buyitemResult;
    }
  },
  components: {
    MyCarousel
  }
};
</script>

<style lang="scss">
.buy {
  width: 60%;
  margin: 0 auto;

  .date-selection {
    margin: 10px;
    color: #000;

    input {
      display: inline-block;
      width: 150px;
      height: 28px;
      margin: 10px;
      font-size: 12px;
    }

    button {
      display: inline-block;
      height: 28px;
      margin: 10px;
      font-size: 12px;
    }
  }

  .bidItemsSection {
    width: 460px;
    margin: 5px auto;

    .bidding-card {
      float: left;
    }
  }
}
</style>

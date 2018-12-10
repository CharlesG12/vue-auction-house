<template>
  <div class="buy">
    <div class="bidItemsSection">
      <div class="row date-select">
        <div class="col"></div>
        <div class="col">
          <v-date-picker 
            class="datepicker" mode="range"
            :min-date='new Date()'
            v-model="this.selectedDates"
            show-caps>
          </v-date-picker>
        </div>
        <div class="col">
          <button @click="updateSellItems">UPDATE</button>
        </div>
        <div class="col"></div>
      </div>
      <bidding-card v-for="(item, index) in getbuyItems"
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
  methods: {
    updateSellItems() {
      console.log("hi")
      // console.log(this.selectedDates)
      let range = this.$store.state.sell_date_range
      this.$store.dispatch("getSellItemsInRange", range)
    }
  },
  computed: {
    getbuyItems() {
      console.log( this.$store.getters.buyitemResult )
      return this.$store.getters.buyitemResult;
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

  .bidItemsSection {
    width: 460px;
    margin: 5px auto;

    .bidding-card {
      float: left;
    }

    .date-select{
      button {
        border-radius: 3px;
      }
    }
  }

  .dateSe {
    margin: 10px 0px 0px 0px;
    
    .datepicker {
      margin: 0 auto;
    }

    a {
      color: black;
    }
  }
}
</style>

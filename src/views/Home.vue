<template>
  <div class="buy">
    <!-- <div>
      Carousel
      <MyCarousel >
      </MyCarousel>
    </div> -->
    <div class="bidItemsSection">
      <bidding-card v-for="(item, index) in getbuyItems"
        :key=index
        :id="item.id"
        :name="item.name"
        :image="item.image"
        desciption="In the seventeenth century, Iranian imitations of Chinese blue-and-white export porcelain increased markedly."
        :startDate="item.startDate">
      </bidding-card>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import MyCarousel from "@/components/Carousel.vue";

export default {
  name: "home",
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
    margin: 0 auto;

    .bidding-card {
      float: left;
    }
  }
}
</style>

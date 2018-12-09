<template>
  <div class="sale">
    <div class="bidItemsSection">
      <selling-card v-for="(item, index) in getsellItems"
        :key=index
        :id="item.id"
        :name="item.name"
        :image="item.image"
        desciption="In the seventeenth century, Iranian imitations of Chinese blue-and-white export porcelain increased markedly."
        :startDate="item.startDate">
      </selling-card>
    </div>
  </div>
</template>

<script>
import SellingCard from "@/components/SellCard.vue"

export default {
  name: "ListSells",
  computed: {
    getsellItems() {
      console.log( this.$store.getters.sellitemResult )
      return this.$store.getters.sellitemResult;
    }
  },
  components: {
    SellingCard
  }
};
</script>

<style lang="scss">
.sale {
  width: 60%;
  margin: auto;
}
</style>

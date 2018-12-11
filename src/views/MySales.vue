<template>
  <div class="mysales">
    <div class="bidItemsSection">
      <selling-card v-for="(item, index) in this.mysales"
        :key=index
        :id="item.id"
        :name="item.name"
        :startPrice="item.initialPrice"
        :image="item.image"
        :startDate="item.startDate"
        @delete="getsellItems">
      </selling-card>
    </div>
  </div>
</template>

<script>
import SellingCard from "@/components/SellCard.vue"

export default {
  name: "mysales",
  data() {
    return {
      mysales: []
    }
  },
  created() {
    this.interval = setInterval(() => this.getsellItems(), 5000);
  },
  mounted() {
    this.getsellItems()
  },
  methods: {
    getsellItems() {
      this.$store.dispatch("updateItems").then(() => {
        let _data = this.$store.state.items
        let _userName = this.$store.state.profile.name
        let _result = _data.filter( x => x.seller === _userName )
        this.mysales.splice(0, this.mysales.length)
        this.mysales.push(..._result)
      })
    }
  },
  components: {
    SellingCard
  }
};
</script>

<style lang="scss">
.mysales {
  width: 60%;
  margin: auto;

  .testing{
    color: black;
    height: 50px;
    width: 50px;
  }

  .bidItemsSection {
    width: 460px;
    margin: 0 auto;

    .selling-card {
      float: left;
    }
  }
}
</style>

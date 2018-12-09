<template>
    <div class="itemcard">
      <div class="container-fluid">
        <div class="row">
          <div class="col info">
            <div>{{ getItemById[0].name }}</div>
            <div>{{ getItemById[0].description }} </div>
            <div> 
              <bidlist :bidlist=getItemById[0].bidlist>
              </bidlist>
            </div>
          </div>
          <div class="col col-lg-2">
            <div class="image" :style="{ 'background-image': `url('${getItemById[0].image}')` }"></div>
            <div>
              <bid>
              </bid>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import bidlist from "@/components/BidList.vue"
import bid from "@/components/biddingpage/bid.vue"

export default {
  name: "itemcard",
  watch: {
    '$route' (to, from) {
      alert(to.params.id);
    }
  },
  computed: {
    getItemById() {
      let itemid = this.$route.params.id;
      return this.$store.getters.getItemById(parseInt(itemid));
    }
  },
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    }
  },
  components: {
    bidlist,
    bid
  }
};
</script>

<style lang="scss">
.itemcard {
  width: 680px;
  height: 600px;
  background-color: white;
  border-radius: 2px;
  margin: 15px auto;
  box-shadow: 0 0 7px 0 #cfcfc4;
  overflow: hidden;
  color: black;

  .info, .image {
    margin: 15px auto;
  }

  .image{
    width: 300px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: 300px 200px;
    border-radius: 5px;
    box-shadow: 0 0 7px 0 #cfcfc4;
  }
}
</style>

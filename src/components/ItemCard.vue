<template>
    <div class="itemcard">
      <div class="container">
        <div class="row">
          <div class="info">
            <div>{{ getItemById[0].name }}</div>
            <div>{{ getItemById[0].description }} </div>
            <div> 
              <bidlist :bidlist="bidlist">
              </bidlist>
            </div>
          </div>
          <div class="image">
            <div class="image" :style="{ 'background-image': `url('${getItemById[0].image}')` }"></div>
            <div>
              <bid :date="getItemById[0].date" 
                    :starttime="getItemById[0].start_time" 
                    :endtime="getItemById[0].end_time">
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
  data() {
    return {
      _item: {},
      bidlist: []
    }
  },
  created() {
    this.$store.dispatch("getAllbidList")
    this.interval = setInterval(() => this.$store.dispatch("getAllbidList"), 3000);
    this.getbidlist()
    this.interval = setInterval(() => this.getbidlist(), 1000);
    
  },
  watch: {
    '$route' (to, from) {
      alert(to.params.id);
    }
  },
  computed: {
    getItemById() {
      return this.$store.getters.getItemById();
    },
    getItem() {
      this.$store.dispatch("updateItems").then(() => {
        let _data = this.$store.state.items
        let _id = this.$router.currentRoute.params.id;
        console.log(_id)
        let _result = _data.filter( x => x.id === _id )
        // console.log(_result[0])
        return _result[0]
        // this._item.splice(0, this._item.length)
        // this._item.push(..._result)
      })
    }
  },
  methods: {
    getbidlist() {
      let _data = this.$store.state.bidlist
      // console.log(_data)
      let _itemid = this.$router.currentRoute.params.id;
      // console.log(_itemid)
      let _result = _data.filter( x => x.itemid === _itemid )
      // console.log(_result)
      // this.mysales.splice(0, this.mysales.length)
      // this.mysales.push(..._result)
      this.bidlist = _data
    }
  },
  components: {
    bidlist,
    bid
  }
};
</script>

<style lang="scss">
// @import 'table-component';

.itemcard {
  width: 680px;
  height: 600px;
  background-color: white;
  border-radius: 2px;
  margin: 15px auto;
  box-shadow: 0 0 7px 0 #cfcfc4;
  overflow: hidden;
  color: black;

  .container {
    width: 100%;
  }

  .row {
    width: 100%;
    margin: 0 auto;
  }

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

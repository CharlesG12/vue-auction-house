<template>
  <div class="biddingpage">
    <div id="currentprice"><span>Current Price: </span>
        {{ getItemById[0].initialPrice }}
    </div>
    <div id="timer"> 
    </div>
    <div id="biddingbox"> 
      <div class="input-group mb-3">
        <div class="input-group-prepend"><span class="input-group-text">$</span>
        </div>
        <input type="number" min="0" class="form-control"
          v-model="bidprice">
        <div class="input-group-append"><span class="input-group-text">.00</span>
        </div>
      </div>
      <button type="button" class="btn btn-success" v-on:click="sumbitbid">Place Bid</button>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name:"biddingpage",
  data() {
      return {
          bidprice: 0,
          timenow: new Date()
      }
  },
  props: [ "id", "date", "bidlist", "starttime", "endtime"],
  created() {
    this.interval = setInterval(() => this.$store.dispatch("updateItems"), 5000);
  },
  methods: {
      sumbitbid: function() {
          console.log(this.timenow)
          let data = this.$store.getters.getItemById()
          let _starttime = data[0].startDate
          let _endtime = data[0].endDate
          // console.log(data)
          // console.log(_starttime)
          // console.log(_endtime)
          // console.log(this.timenow.getTime())

          let startDate = new Date(_starttime)
          let endDate = new Date(_endtime)
          // console.log(startDate.getTime())
          // console.log(endDate.getTime())


          if( this.timenow.getTime() > startDate.getTime() && this.timenow.getTime() < endDate.getTime()){
            console.log("ok to bid")
            if ( this.$data.bidprice < this.getItemById[0].initialPrice ){
            alert("price too low")
            }
            else{ 
              let _id = this.$router.currentRoute.params.id;
              console.log(_id) 
              //alert(_id)
              let _price = this.$data.bidprice
              let _token = this.$store.state.token
              let _url = "http://localhost:3030/postitems/" + _id;
              let bidder = this.$store.state.profile.name

              axios({
                method: "patch",
                url: _url, 
                headers: {"Authorization": _token},
                data: {
                  top_bidder: bidder,
                  current_price: _price,
                  product_id: _id
                }
              })
              .then(function (response) { 
                console.log(response)
                this.$store.dispatch("updateItems")
                this.$store.dispatch("getAllbidList")
                alert("bid suceesed")
              })
              .catch(function (error) {
                console.log(error);
              });
            }
          }
          else{
            alert("Can Not bid now!")
            console.log("Can Not bid now!")
          }
          
      },
      isNumber: function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            evt.preventDefault();;
        } else {
            return true;
        }
      }
  },
  computed: {
    getItemById() {
      return this.$store.getters.getItemById();
    }
  },
};
</script>

<style lang="scss">
.biddingpage {
  height: 200px;
  width: 300px;
  background-color: white;
  border-radius: 2px;
  // box-shadow: 0 0 2px 0 #cfcfc4;

  #currentprice {
    margin: 10px auto;
    padding: 5px;
  }
}
</style>

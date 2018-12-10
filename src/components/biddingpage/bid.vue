<template>
  <div class="biddingpage">
    <p>this is bid section</p>
    <div id="currentprice"><span>Current Price: </span>
        {{ currentPrice }}
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
          bidprice: 0
      }
  },
  props: [ "id", "bidlist" ],
  methods: {
      sumbitbid: function() {
          if ( this.$data.bidprice < this.currentPrice ){
            
            alert("price too low")
          }
          else{ 
            let _id = this.$store.getters.getItemById()
            console.log(_id[0].id) 
            let _price = this.$data.bidprice
            axios.patch('http://localhost:3030/bids/', {
              params: {
                id:_id,
                price: _price
              },
              headers: {"Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzBkODE5ZTY5MGU1YTZiYTBiNDAzMWUiLCJpYXQiOjE1NDQzODkxMzUsImV4cCI6MTU0NDQ3NTUzNSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzQ2NzYwZjYtNmQ0ZC00YzNiLTkyYzctMjkzYTE3MDM0NWQ2In0.AFJ9CFxfqxP_oLunwLOQIsmv3T7yWzvg7ChwCB3R7AA"}
            })
            .then(function (response) { })
            .catch(function (error) {
              console.log(error);
            });
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
      let itemid = this.$route.params.id;
      return this.$store.getters.getItemById(parseInt(itemid));
    },
    currentPrice() {
      return 2400;
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
  box-shadow: 0 0 2px 0 #cfcfc4;
}
</style>

import Vue from "vue";
import Vuex from "vuex";
import router from "@/router"
import axios from "axios"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAdmin: false,
    profile: {
      // name: null,
      // email: null
      id: "Froja",
      name: "Froja",
      email: "Froja@gmail.com"
    },
    sell_date_range: new Date(),
    items: [],
    schedule: [],
    // token: null,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzBmYmM3MzkyMzRhNjI4MWM5MTYzODciLCJpYXQiOjE1NDQ1MzU0MzMsImV4cCI6MTU0NDYyMTgzMywiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiZmEzODhkMWYtMDU5YS00MDAwLWIyODYtMTcwNjk4ZjIxZjgwIn0.sGwAZTv4ld0fw8PZ2w0gcAgeNo6GFpcicQOL0hqvnz4",
    available_dates: [
      { 
        date: new Date(2018, 11, 11),
        timeslots: ["13:20-13:40", "13:40-14:00", "14:00-14:20"]
      },
      { 
        date: new Date(2018, 11, 14),
        timeslots: ["8:20-8:40", "8:40-9:00", "10:00-10:20"]
      },
      { 
        date: new Date(2018, 11, 14),
        timeslots: ["13:20-13:40", "13:40-14:00", "14:00-14:20"]
      }
    ],
    bidlist: []
  },
  getters: {
    getallItems: state => state.items,
    loginStatus: state => state.loggedIn,
    getItemById: state => () => { 
      let current_id = router.currentRoute.params.id;
      let result = state.items.filter( item => item.id === current_id )
      return result === null ? "none" : result;
    },
    getALLbidlist: state => state.bidlist,
    getavailableDates: state => state.available_dates,
    getToken: state => state.token,
    getProfile: state => state.profile,
    getauctionschedule: state => state.schedule
  },
  mutations: {
    UPDATE_TOKEN(state, result) { state.token = result },
    UPDATE_PROFILE(state, result) { state.profile = result },
    UPDATE_ITEM_TABLE(state, result) { state.profile = result },
    UPATE_ITEMS(state, result) { state.items = result },
    GET_ALL_TIME_SLOTS(state, result) { state.schedule = result },
    GET_ALL_BIDLIST(state, result) { state.bidlist = result }
  },
  actions: {
    updateToken(context, param) {
      context.commit('UPDATE_TOKEN', param)
    },
    updateProfile(context, param) {
      context.commit('UPDATE_PROFILE', param)
    },
    login(context, param) {
      console.log("in store login");
      let _body = {
        "strategy": "local",
        "email": "siiam@gmail.com",
        "password": "sam"
      }
      axios({ method: "post", 
              url: "http://localhost:3030/authentication",
              body: _body
      }).then(function (response) {
        alert(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    updateItems(context) {
      let url = "http://localhost:3030/postitems"
      return axios.get("http://localhost:3030/postitems")
      .then(function(response){
        let _data = response.data.data
        let itemList = []
        for( var i = 0; i < _data.length; i++ ){
          // console.log(_data[i])
          let _item = { id: _data[i]._id,
                      name: _data[i].product_name,
                      seller: _data[i].seller_username,
                      initialPrice: _data[i].current_price,
                      startDate: _data[i].start_time,
                      endDate: _data[i].end_time,
                      image: "https://www.louvre.fr/sites/default/files/imagecache/940x768/medias/medias_images/images/louvre-allegorie-fortune-fortuna-marina.jpg",
                      description: "This is a sample"
                    }
          itemList.push(_item)          
        }
        context.commit('UPATE_ITEMS', itemList)
      });
    },
    getAllTimeSlots(context) {
      let _timeslots = []
      axios.get("http://localhost:3030/auctions")
      .then(function(response){
        let _data = response.data.data
        for( var i = 0; i < _data.length; i++ ){
          // console.log(_data[i])
          let _timeslote = {  date: _data[i].date,
                              start_time: _data[i].start_time,
                              end_time: _data[i].end_time
                            }
          _timeslots.push(_timeslote)
        }
        console.log(_timeslots)
        context.commit("GET_ALL_TIME_SLOTS", _timeslots)
      })
    },
    getAllbidList(context){
      axios.get("http://localhost:3030/bids")
      .then(function(response){
        // console.log(response)
        let _bids = []
        let _data = response.data.data
        for( var i = 0; i < _data.length; i++ ){
          // console.log(_data[i])
          let _bid = {  itemid: _data[i].product_id,
                        date: _data[i].createdAt,
                        bidder: _data[i].bidder,
                        price: _data[i].current_price
                            }
          _bids.push(_bid)
        }
        console.log(_bids)
        context.commit("GET_ALL_BIDLIST", _bids)
      })
    }
  }
});

export default store

import Vue from "vue";
import Vuex from "vuex";
import router from "@/router"
import axios from "axios"

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedIn: true,
    profile: {
      // name: null,
      // email: null
      name: "sam",
      email: "siiam@gmail.com"
    },
    sell_date_range: new Date(),
    // token: null,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJ1c2VySWQiOiI1YzBkODE5ZTY5MGU1YTZiYTBiNDAzMWUiLCJpYXQiOjE1NDQzODkxMzUsImV4cCI6MTU0NDQ3NTUzNSwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiYW5vbnltb3VzIiwianRpIjoiYzQ2NzYwZjYtNmQ0ZC00YzNiLTkyYzctMjkzYTE3MDM0NWQ2In0.AFJ9CFxfqxP_oLunwLOQIsmv3T7yWzvg7ChwCB3R7AA",
    buy_items: [
      {
        id: 123,
        name: "Abstract art",
        initialPrice: "20000",
        startDate: "Dec 11 2018 13:20",
        description:
          "This is an example description",
        image: require("@/assets/pics/abs1.jpg"),
        bidlist: [{ date: "20 Nov 2018", time: "12:25", price:"Sean bid for $2003"},
                  { date: "20 Nov 2018", time: "12:24", price:"Peter bid for $2004"},
                  { date: "20 Nov 2018", time: "12:23", price:"Chole bid for $2005"}]
      },
      {
        id: 124,
        name: "Allegory of Fortune",
        initialPrice: "20000",
        startDate: "Dec 11 2018 13:30",
        description:
        "This is an example description",
        image: "https://www.louvre.fr/sites/default/files/imagecache/940x768/medias/medias_images/images/louvre-allegorie-fortune-fortuna-marina.jpg",
        bidlist: [{ date: "20 Nov 2018", time: "12:25", price:"Sean bid for $2003"},
                  { date: "20 Nov 2018", time: "12:24", price:"Peter bid for $2004"},
                  { date: "20 Nov 2018", time: "12:23", price:"Chole bid for $2005"}]
      },
      {
        id: 125,
        name: "Afterflow",
        initialPrice: "20000",
        startDate: "Dec 1 2018 13:40",
        description:
          "This is an example description",
        image: require("@/assets/pics/afterglow.jpg")
      },
      {
        id: 126,
        name: "Ancient actor",
        initialPrice: "20000",
        startDate: "Dec 08 2018 13:50",
        description:
          "This is an example description",
        image: require("@/assets/pics/actor-adult-ancient.jpg"),
        bidlist: [{ date: "20 Nov 2018", time: "12:25", price:"Sean bid for $2003"},
                  { date: "20 Nov 2018", time: "12:24", price:"Peter bid for $2004"},
                  { date: "20 Nov 2018", time: "12:23", price:"Chole bid for $2005"}]
      }
    ],
    sell_items: [
      {
        id: 122,
        name: "Sell Abstract art",
        initialPrice: "20000",
        startDate: "Dec 11 2018 13:20",
        description:
          "This is an example description",
        image: require("@/assets/pics/abs1.jpg"),
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
      },
      {
        id: 115,
        name: "Sell Allegory of Fortune",
        initialPrice: "20000",
        startDate: "Dec 11 2018 13:30",
        description:
          "This is an example description",
        image: "https://www.louvre.fr/sites/default/files/imagecache/940x768/medias/medias_images/images/louvre-allegorie-fortune-fortuna-marina.jpg",
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
      },
      {
        id: 105,
        name: "Sell Afterflow",
        initialPrice: "20000",
        startDate: "Dec 1 2018 13:40",
        description:
          "This is an example description",
        image: require("@/assets/pics/afterglow.jpg"),
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
      },
      {
        id: 145,
        name: "Sell Ancient actor",
        initialPrice: "20000",
        startDate: "Dec 08 2018 13:50",
        description:
          "This is an example description",
        image: require("@/assets/pics/actor-adult-ancient.jpg"),
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
      }
    ],
    items: [
      { firstName: "John", lastName: "Lennon", instrument: "Guitar", birthday: "04/10/1940", songs: 72 },
      { firstName: "Paul", lastName: "McCartney", instrument: "Bass", birthday: "18/06/1942", songs: 70 },
      { firstName: "George", lastName: "Harrison", instrument: "Guitar", birthday: "25/02/1943", songs: 22 },
      { firstName: "Ringo", lastName: "Starr", instrument: "Drums", birthday: "07/07/1940", songs: 2 },
      ],
    itemtable: [
      {
        id: 105,
        name: "Sell Afterflow",
        initialPrice: "20000",
        startDate: "Dec 01 2018 13:40",
        description:
          "This is an example description",
        image: require("@/assets/pics/afterglow.jpg"),
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
      },
      {
        id: 145,
        name: "Sell Ancient actor",
        initialPrice: "20000",
        startDate: "Dec 01 2018 14:0",
        description:
          "This is an example description",
        image: require("@/assets/pics/actor-adult-ancient.jpg"),
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
      },
      {
        id: 105,
        name: "Sell Afterflow",
        initialPrice: "20000",
        startDate: "Dec 03 2018 13:40",
        description:
          "This is an example description",
        image: require("@/assets/pics/afterglow.jpg"),
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
      },
      {
        id: 145,
        name: "Sell Ancient actor",
        initialPrice: "20000",
        startDate: "Dec 03 2018 13:50",
        description:
          "This is an example description",
        image: require("@/assets/pics/actor-adult-ancient.jpg"),
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
      },
      {
        id: 105,
        name: "Sell Afterflow",
        initialPrice: "20000",
        startDate: "Dec 1 2018 14:40",
        description:
          "This is an example description",
        image: require("@/assets/pics/afterglow.jpg"),
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
      },
      {
        id: 145,
        name: "Sell Ancient actor",
        initialPrice: "20000",
        startDate: "Dec 08 2018 15:50",
        description:
          "This is an example description",
        image: require("@/assets/pics/actor-adult-ancient.jpg"),
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
      }
    ],
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
    ]
  },
  getters: {
    buyitemResult: state => state.buy_items,
    sellitemResult: state => state.sell_items,
    loginStatus: state => state.loggedIn,
    getItemById: state => () => { 
      let current_id = router.currentRoute.params.id;
      let result = state.buy_items.filter( item => item.id === parseInt(current_id) )
      return result === null ? "none" : result;
    },
    getavailableDates: state => state.available_dates,
    getToken: state => state.token,
    getProfile: state => state.profile
  },
  mutations: {
    UPDATE_SELL_LIST(state, result) { state.sell_items = result },
    UPDATE_BID_LIST(state, result) { state.buy_items = result },
    DELETE_SALE_ITEM(state, result) { state.sell_items = state.sell_items.filter( x => x.id != result )},
    UPDATE_TOKEN(state, result) { state.token = result },
    UPDATE_PROFILE(state, result) { state.profile = result },
    UPDATE_ITEM_TABLE(state, result) { state.profile = result },
  },
  actions: {
    fetch_sell_list(context, param) {
      context.commit('UPDATE_SELL_LIST', param)
    },
    fetch_bid_list(context, param) {
      context.commit('UPDATE_BID_LIST', param)
    },
    getcurrentItemInfo(context, param) {
    },
    deleteSaleItem(context, param) {
      context.commit('DELETE_SALE_ITEM', param)
    },
    updateCurrentItem(context, param) {
      // context.commit(UPDATE_CURRENT_ITEM)
      // pull data every 0.5 second
    },
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
    getSellItemsInRange(context, param) {
      console.log("in get sell items in range")
      let startDate = param.startDate
      let endDate = param.endDate


    }
  }
});

export default store

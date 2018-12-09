import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedIn: true,
    buy_items: [
      {
        id: 123,
        name: "Abstract art",
        initialPrice: "20000",
        startDate: "Dec 11 2018 13:20",
        description:
          "This is an example description",
        image: require("@/assets/pics/abs1.jpg")
      },
      {
        id: 124,
        name: "Allegory of Fortune",
        initialPrice: "20000",
        startDate: "Dec 11 2018 13:30",
        description:
        "This is an example description",
        image: "https://www.louvre.fr/sites/default/files/imagecache/940x768/medias/medias_images/images/louvre-allegorie-fortune-fortuna-marina.jpg"
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
        bidinfo: ["Sean bid for $2003", "Peter bid for $2004", "Chole bid for $2005"]
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
    ]
  },
  getters: {
    buyitemResult: state => state.buy_items,
    sellitemResult: state => state.sell_items,
    loginStatus: state => state.loggedIn,
    getItemById: state => (id) => { 
      console.log( state.buy_items.filter( item => item.id === id ))
      return state.buy_items.filter( item => item.id === id )
    }
  },
  mutations: {
    UPDATE_SELL_LIST(state, result) { state.sell_items = result },
    UPDATE_BID_LIST(state, result) { state.buy_items = result },
  },
  actions: {
    fetch_sell_list(context, param) {
      context.commit('UPDATE_SELL_LIST', param)
    },
    fetch_bid_list(context, param) {
      context.commit('UPDATE_BID_LIST', param)
    },
    getcurrentItemInfo(context, param) {
      
    }
  }
});
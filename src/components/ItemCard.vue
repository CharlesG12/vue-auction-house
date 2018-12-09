<template>
    <div class="itemcard">
      <div class="container-fluid">
        <div class="row">
          <div class="col info">
            <div>{{ getItemById[0].name }}</div>
            <div>{{ getItemById[0].description }} </div>
            <div> 
              <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
              </ul>  
            </div>
          </div>
          <div class="col col-lg-2">
            <div class="image" :style="{ 'background-image': `url('${getItemById[0].image}')` }"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "itemcard",
  data() {
      return {
        id: "1",
        name: "testing",
        initalPrice: "2000",
        initalDate: "20 Jan 2018, 13:00 - 13:20",
        Description: "This is a sample description.",
        bidlist: [{ date: "20 Nov 2018", time: "12:25", price:"Sean bid for $2003"},
                  { date: "20 Nov 2018", time: "12:24", price:"Peter bid for $2004"},
                  { date: "20 Nov 2018", time: "12:23", price:"Chole bid for $2005"}]
      }
  },
  watch: {
    '$route' (to, from) {
      alert(to.params.id);
    }
  },
  computed: {
    getItemById() {
      // console.log(this.$store.getters.getItemById("123"))
      return this.$store.getters.getItemById(126);
    }
  },
//   props: ["name", "startDate", "startPrice", "image", "description"],
  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    }
  },
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

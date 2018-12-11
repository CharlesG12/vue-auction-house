<template>
  <div class="bidlist">
    <!-- <p>this is bid list</p> -->
    <!-- <ul>
      <li v-for="(item, index) in bidlist" :key=index>
        <span class="time">{{ item.date }}</span>
        <span class="time">{{ item.bidder }}</span>
        <span class="bid">{{ item.seller }}</span>
      </li>
    </ul>   -->
    <table-component
        :data="bidlist"
        sort-by="date"
        sort-order="asc">
        <table-column show="date" label="Date"></table-column>
        <table-column show="bidder" label="Bidder"></table-column>
        <table-column show="price" label="Price"></table-column>
    </table-component>
  </div>
</template>

<script>

export default {
  name:"bidlist",
  props: ["bidlist"],
};
</script>

<style lang="scss">
// @import 'table-component';

.bidlist {
  height: 300px;
  width: 200px;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 0 2px 0 #cfcfc4;
}
</style>

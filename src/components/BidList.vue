<template>
  <div class="bidlist">
    <p>this is bid list</p>
    <ul>
      <li v-for="(item, index) in bidlist" :key=index>
        <span class="time">{{ item.time }}</span>
        <span class="bid">{{ item.price }}</span>
      </li>
    </ul>  
  </div>
</template>

<script>

export default {
  name:"bidlist",
  props: ["bidlist"],
};
</script>

<style lang="scss">
.bidlist {
  height: 300px;
  width: 200px;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0 0 2px 0 #cfcfc4;
}
</style>

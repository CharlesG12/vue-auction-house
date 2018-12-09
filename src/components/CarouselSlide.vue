<template>
  <div>
    <slide>
      <div class="right-box" :style="{ 'background-image': `url('${image}')` }">
        <div>
          {{ name }}
        </div>
        <div class="bu">
          <div class="button" v-on:click="enterbid">
            <span>PLACE</span>
            <div>BID</div>
          </div>
        </div>
      </div>
    </slide>
  </div>
</template>

<script>

export default {
  name:"CarouselSlide",
  props: ["name", "image"],
};
</script>

// <style lang="scss">
// span {
//   color: black;
//   font-size: 0.7em;
//   float: top;
//   padding: 0px;
//   position: relative;
//   top: -3px;
//   margin: 0 auto;
//   font-weight: lighter;
// }

// div {
//   color: black;
//   margin: 0px;
//   font-size: 1.2em;
//   margin: 0 auto;
//   position: relative;
//   top: -10px;
// }
</style>
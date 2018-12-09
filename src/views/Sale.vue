<template>
  <div class="sale">
    <post-card>
    </post-card>
  </div>
</template>

<script>
// import saleitem from "@/components/Sale_Item.vue";
import postCard from "@/components/PostCard.vue";

export default {
  name: "sale",
  components: {
    postCard
  }
};
</script>

<style lang="scss">
.sale {
  margin-top:20px;
}
</style>

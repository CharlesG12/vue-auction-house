<template>
  <div class="ltemtable">
    <table-component
        :data="this.$store.state.items"
        sort-by="songs"
        sort-order="asc">
        <table-column show="name" label="name"></table-column>
        <table-column show="seller" label="seller"></table-column>
        <table-column show="initialPrice" label="Price"></table-column>
        <table-column show="startDate" label="StartDate"></table-column>
        <table-column show="editUrl" label="" :sortable="false" :filterable="false"></table-column>
    </table-component>
  </div>
</template>

<script>

export default {
  name: "ltemtable",
  data() {
    return {
    }
  },
  methods: {
    
  },
  components: {
  }
};
</script>

<style lang="scss">
@import 'table-component';

.ltemtable {
  width: 80%;
  margin: 0 auto;
  color: black;

}
</style>

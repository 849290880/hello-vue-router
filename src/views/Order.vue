<template>
  <div class="Order">订单页面 {{ list1 }}</div>
</template>

<script>
import bus from '@/utils/eventBus';

export default {
  name: 'Order',
  data() {
    return {
      // lists: this.$store.state.lists,
      list1: [],
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      bus.$on('listssss', (lists) => {
        lists.forEach((item) => {
          // console.log(item);
          this.list1 = item;
        });
        // console.log(this.list1);
        // console.log(lists);
        // this.list1 = [...lists];
      });
    },
  },
};
</script>

<style>
</style>

<template>
  <div class="hello">
    <h1>菜单添加</h1>
    <div class="menu">
      <div class="left">
        添加表单
        <form v-if="isShow">
          <div class="item">
            菜品名称
            <input type="text" v-model="unit.name" />
          </div>
          <div class="item">
            菜品图片
            <input type="text" v-model="unit.url" />
          </div>
          <div class="item">
            菜品分类
            <input type="text" v-model="unit.type" />
          </div>
          <div class="item">
            菜品单价
            <input type="text" v-model="unit.price" />
          </div>
          <div>
            <button @click="sumbit()">确定</button>
          </div>
        </form>
        <div v-else>
          {{ unit.name }}-{{ unit.type }}-{{ unit.price }}
          <button @click="add()">添加</button>
          <button @click="cancel()">取消</button>
        </div>
      </div>
      <div class="right">
        菜单列表
        <ul>
          <li v-for="(item, index) in lists" :key="index">
            {{ item.name }}-{{ item.type }}-{{ item.price }}
          </li>
        </ul>
      </div>
      <div>
        <button @click="send()">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '@/utils/eventBus';

export default {
  name: 'Menu',
  data() {
    return {
      isShow: true,
      unit: {
        name: '',
        url: '',
        type: '',
        price: '',
      },
      lists: this.$store.state.lists,
    };
  },
  methods: {
    add() {
      this.lists.push({ ...this.unit });
      this.$store.commit('setlist', this.lists);
      this.unit.name = '';
      this.unit.url = '';
      this.unit.type = '';
      this.unit.price = '';
      this.isShow = true;
    },
    cancel() {
      this.isShow = true;
    },
    sumbit() {
      this.isShow = false;
    },
    send() {
      bus.$emit('listssss', this.lists);
    },
  },
  // beforeRouteLeave(to, from, next) {
  //   if (to.name === 'Order') {
  //     bus.$emit('listssss', this.lists);
  //   }
  //   next();
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.left {
  flex-grow: 1;
}
.right {
  flex-grow: 1;
}
ul li {
  list-style: none;
}
</style>

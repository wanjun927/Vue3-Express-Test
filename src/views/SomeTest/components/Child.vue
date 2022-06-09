<template>
  <div>子组件</div>
  <ul>
    <li v-for="item in list" :key="item.id">{{ item.id }}</li>
  </ul>
  <a-input v-model:value="inputVal" />
  <a-button @click="() => add()">add</a-button>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "Child",
  props: ["list"],
  emits: ["add"],
  setup(props, {emit}) {
    const inputVal = ref("");
    const add = () => {
      emit("add", inputVal.value);
    };
    return {
      // list,
      add,
      inputVal,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

<!--
 * @Author: Mia
 * @Date: 2022-04-02 15:45:17
 * @LastEditors: Mia
 * @LastEditTime: 2022-04-11 14:47:05
 * @Description:
-->
<template>
  slots方法
  <a-button @click="() => handleClick(0)">0</a-button>
  <a-button @click="() => handleClick(1)">1</a-button>
  <div class="slot-container">
    <!-- <component :is="defaults[1]" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(_, { slots }) {
    console.log(slots);
    // 可以通过 slots.default拿到插槽中的数据
    // console.log(slots.default());

    // const defaults = slots.default();
    // console.log(defaults);

    const tab = ref(0);

    const handleClick = (val: number) => {
      tab.value = val;
    };

    return {
      // defaults,
      tab,
      handleClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.slot-container {
  color: red;
}
</style>

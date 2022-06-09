<template>
  <h1>Vue3中的生命周期</h1>
  <code>
    setip() { console.log(1) onBeforeMount(() => { console.log('2') })
    onMounted(() => { console.log('3') }) console.log('4') }, }
  </code>
  <div :style="{color: 'red'}">最终的输出顺序为 1， 4， 2， 3</div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted } from "vue";

export default defineComponent({
  setup() {
    console.log("1");

    onBeforeMount(() => {
      console.log("2");
    });

    onMounted(() => {
      console.log("3");
    });

    console.log("4");
  },
});
</script>

<style lang="scss" scoped>
</style>

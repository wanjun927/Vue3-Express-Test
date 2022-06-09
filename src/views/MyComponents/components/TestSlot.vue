<template>
  <button>
    <slot>这里是子组件的内容</slot>
  </button>

  <div class="header">
    <slot name="header"></slot>
  </div>

  <div class="content">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // setup() {
  // },
});
</script>

<style lang="scss" scoped>
.header {
  color: red;
  font-size: 16px;
}
.content {
  color: blue;
  font-size: 18px;
  font-weight: bold;
}
</style>

<template>
  <ul>
    <li v-for="(item, index) in item" :key="item">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const item = [{
      id: 1,
      name:'mia'
    }, {
      id: 2,
      name: 'hu'
    }]

    return {
      item
    }
  },
})
</script>

<style lang="scss" scoped>

</style>

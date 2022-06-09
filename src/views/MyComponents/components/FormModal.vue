<template>
  <h1>表单绑定</h1>
  <input/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const message = {
      'text': 'hello world'
    }
    return {
      message
    }
  },
})
</script>

<style lang="scss" scoped>

</style>

<!--
 * @Author: Mia
 * @Date: 2022-03-15 14:32:50
 * @LastEditors: Mia
 * @LastEditTime: 2022-03-15 14:44:08
 * @Description:
-->
<template>
  <h1>这里是子组件</h1>
  <component-c v-bind="$attrs"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComponentC from './ComponentC.vue'

export default defineComponent({
  inheritAttrs: true,
  components: {
    ComponentC
  }
  // setup() {

  // },
})
</script>

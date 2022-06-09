<!--
 * @Author: Mia
 * @Date: 2022-03-15 14:35:55
 * @LastEditors: Mia
 * @LastEditTime: 2022-03-15 14:45:34
 * @Description: $attr 中的孙组件
-->
<template>
  <div>
    <h1>这里是孙组件</h1>
    <p>
      从最上层组件穿过来的数据 == {{passData}}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: ['passData']
  // setup() {

  // },
})
</script>


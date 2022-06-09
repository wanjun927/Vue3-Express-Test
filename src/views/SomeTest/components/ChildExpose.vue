<!--
 * @Author: Mia
 * @Date: 2022-04-02 15:12:48
 * @LastEditors: Mia
 * @LastEditTime: 2022-04-02 17:26:33
 * @Description: 
-->
<template>
  <div>123123123123</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup(_, {expose}) {
    const data = ref(1)
    const data2 = ref(['123','123123'])

    const todo = () => {
      console.log(1)
    }

    expose({
      data,
      todo
    })

    return {
      data,
      data2,
      todo
    }
  },
})
</script>

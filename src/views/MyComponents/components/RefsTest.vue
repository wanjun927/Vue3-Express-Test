<!--
 * @Author: Mia
 * @Date: 2022-03-15 11:26:23
 * @LastEditors: Mia
 * @LastEditTime: 2022-03-15 14:12:18
 * @Description: ref 实践
-->
<template>
  <h1>ref</h1>
  <div>
    <p>{{count}}</p>
    <a-button @click="count ++">+</a-button>
    <a-button @click="nested.count ++">nested+</a-button>
    <a-button @click="nest.count.value ++">nest+</a-button>
    <p>{{res}} === {{num}} === {{propData}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  props: {
    res: String,
    num: Number,
    propData: String, // 在js中使用小驼峰，在模板里面是短横线分隔(prop-data)
  },
  setup() {
    const count = ref(0)

    return {
      count,
      nested: reactive({
        count
      }),
      nest: {
        count
      }
    }
  },
})
</script>


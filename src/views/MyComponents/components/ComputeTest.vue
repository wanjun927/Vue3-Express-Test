<template>
  <h1>{{ text }}</h1>
  <button @click="change">count is: {{ state.count }}</button>
</template>
 
 
<script>
import { ref, reactive, computed, toRefs } from 'vue'
export default {
  props: {
    msg: String
  },
  setup(props, context){
    console.log('context',context)
    // 使用 toRefs 来解构保持数据的响应性
    const { msg } = toRefs(props)

    let state = reactive({count: 0})
    // 在 setup 组合API 中 compute 属性是一个方法
    // 参数是一个 getter 和 setter 函数
    let text = computed(() => {
      // 被结构的数据需要通过 .value 的方式来访问
      return msg.value.split('').reverse().join('')
    })
    const change = () => state.count++
    return { state, change, text }
  }
}
</script>
<!--
 * @Author: Mia
 * @Date: 2021-12-24 14:31:07
 * @LastEditors: Mia
 * @LastEditTime: 2022-01-05 10:42:40
 * @Description:
-->
<template>
  <div>子组件2 - {{ msg }} - {{ msgRef }}</div>
  <div>{{ memberInfo.id }} - {{ memberInfo.name }}</div>
  <ul>
    <li v-for="item in memberArray" :key="item.id">{{item.name}}-{{item.value || ''}}</li>
  </ul>
  <div ref="divRef">留意这个节点，这个节点</div>
  <child-ts ref="child"/>
  <div>此处是 reactive ts的写法{{memberReactive.id}}</div>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRef } from "vue";
import ChildTs from './ChildTs.vue'
export default defineComponent({
  components: {ChildTs},
  setup() {
    const msg = "hello world";
    const msgRef = ref<string>("hello world lalallala");
    // 子组件 使用 typeof 获取子组件的类型
    const child = ref<typeof ChildTs | null>(null)
    // DOM元素使用 HTML元素接口
    const divRef = ref<HTMLElement | null>(null)

    // onMounted 保证视图渲染完毕后再执行对节点的操作 e.g. onMounted / nextTick
    onMounted(() => {
      // console.log('refLog', divRef.value.innerHTML);

      // 可以对子组件中的数据进行操作
      // console.log('childRef', child.value)
    })

    // 定义一个类型/接口
    interface Member {
      id: number;
      name: string;
      value?: string; //可选，不可以选
    }

    const memberInfo = ref<Member>({
      id: 1,
      name: "123123",
    });

    const memberReactive = reactive<Member>({
      id: 123123,
      name: "12312312312312reactive"
    })


    // 使用 ref 定义一个对象数组
    const memberArray = ref<Member[]>([
      {id: 2, name: '123123123123123'},
      {id: 3, name: '345345345345345', value: '123123123'}
    ])

    // 使用 reactive 来定义一个对象成员数组
    const memberReactiveArray:Member[] = reactive([{
      id: 1123123123,
      name: '1123123123123123123'
    }])

    return {
      msg,
      msgRef,
      memberInfo,
      memberArray,
      child,
      divRef,
      memberReactive,
      memberReactiveArray
    };
  },
});
</script>

<style lang="scss" scoped></style>

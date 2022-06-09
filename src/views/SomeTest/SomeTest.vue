<!--
 * @Author: Mia
 * @Date: 2021-12-24 10:50:21
 * @LastEditors: Mia
 * @LastEditTime: 2022-04-02 16:08:34
 * @Description:
-->
<template>
  <div>1231</div>
  <div>1231</div>
  <div>1231</div>
  <div>1231</div>
  <child :list="list" @add="xiao" />
  <div>{{userInfo.age}} - {{userInfo.name}}</div>
  <div>{{supplierInfo.id}} - {{supplierInfo.name}}</div>
  <child-two />
  <grand-son/>
  <ul>
    <li v-for="(item, index) in name" :key="index">{{item}}</li>
  </ul>
  输入传入最里层组件的值：
  <child-attrs :name="name"/>
  expose函数实践
  <div @click="handleClick">
    <h1>这里是父组件</h1>
    <child-expose ref="exposeRef"/>
  </div>

  Slots函数实践
  <child-slot>
    <div>
      <span ref="spanRef">这里是子元素1</span>
      <span>这里是子元素1</span>
      <span>这里是子元素1</span>
    </div>
    <div>
      <span>这里是子元素2</span>
      <span>这里是子元素2</span>
      <span>这里是子元素2</span>
      <span>这里是子元素2</span>
    </div>
  </child-slot>
</template>

<script>
import { reactive, ref, provide } from "vue";
import Child from "./components/Child.vue";
import ChildTwo from './components/ChildTwo.vue'
import GrandSon from './components/GrandSon.vue';
import ChildAttrs from './components/ChildAttrs.vue';
import ChildExpose from './components/ChildExpose.vue'; 
import ChildSlot from './components/ChildSlot.vue'; 
export default {
  components: { Child, GrandSon, ChildTwo, ChildAttrs, ChildExpose, ChildSlot },
  name: "SomeTest",
  setup() {

    const exposeRef = ref(null)

    const handleClick = () => {
      console.log(exposeRef.value)
      exposeRef.value.todo()  
    }

    const spanRef = ref(null)

    const list = ref([
      { id: "one", value: "one" },
      {
        id: "two",
        value: "two",
      },
    ]);
    const name = ref(['1']);
    const xiao = (val) => {
      console.log(val)
      name.value.push(val);
    };
    const msg = 'hello world'
    const userInfo = reactive({
      name: 'tom',
      age: 23,
    })
    const supplierInfo = {
      id: "supplier",
      name: 'info'
    }
    const update = (value) => {
      userInfo.name = value
    }
    // 使用 provide 传值
    provide('msg', msg)
    provide('userInfo', userInfo)
    provide('supplierInfo', supplierInfo)
    provide('update', update)
    setTimeout(() => {
      userInfo.name = 'jerry',
      userInfo.age = 78
    }, 2000)
    setTimeout(() => {
      supplierInfo.id = "hshshshshshhshshshshshhs"
    }, 2000)
    return {
      list,
      xiao,
      name,
      userInfo,
      supplierInfo,
      msg,
      exposeRef,
      handleClick,
      spanRef
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

<!--
 * @Author: Mia
 * @Date: 2022-04-02 13:18:03
 * @LastEditors: Mia
 * @LastEditTime: 2022-04-02 17:49:22
 * @Description:
-->
<template>
  <div>
    这里是最里层组件
    <ul>
      <li v-for="item in name" :key="item">{{ item }}</li>
    </ul>
    <p class="weight-size">{{objData.id}}</p>
    <p class="weight-size">{{objData.name}}</p>
    <p>idRef = {{idRef}}</p>
    <a-button @click="handleClick" type="primary">Add idRef</a-button>
    <p>toRefs</p>
    <p class="weights-size">{{objsData.ids}}</p>
    <p class="weights-size">{{objsData.names}}</p>
    <a-button @click="handleClick1">Add idsRef</a-button>
    <a-button @click="handleClick2">Add idsRef</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRef, toRefs } from "vue";

export default defineComponent({
  setup(_, { attrs }) {
    // context.attrs 的用法，可以直接解构

    const objData = reactive({
      id: '123',
      name: 'fasd'
    })

    const objsData = reactive({
      ids: 'fasdfasd',
      names: '123123123123'
    })

    // 将一个响应式对象所有属性转化为对应的 ref，以此
    const objsRef = toRefs(objsData)

    console.log('toRefs', objsData, objsRef)

    // toRef 将一个响应式对象的某个属性，转化为对应的 ref 
    const idRef = toRef(objData, 'id')

    const handleClick = () => {
      idRef.value = idRef.value+1
    }

    const handleClick1 = () => {
      objsRef.ids.value = objsRef.ids.value + 2
    }

    const handleClick2 = () => {
      objsRef.names.value = objsRef.names.value + 2
    }


    const { name } = attrs;
    return { name, objData, idRef, handleClick, objsData, handleClick1, handleClick2 };
  },
});
</script>

<style lang="scss" scoped>
.weight-size {
  font-size: 20px;
  color: greenyellow
}
.weights-size {
  font-size: 20px;
  color: rgb(15, 121, 112)
}
</style>

<!--
 * @Author: Mia
 * @Date: 2022-01-05 10:46:44
 * @LastEditors: Mia
 * @LastEditTime: 2022-03-15 17:07:54
 * @Description:
-->
<template>
  <div>组件</div>
  <h1>普通插槽</h1>
  <div class="slot-content">
    <test-slot> 这里是父组件 </test-slot>
    <test-slot></test-slot>
  </div>

  <h1>具名插槽</h1>
  <div class="slot-content">
    <test-slot>
      <template v-slot:content> 这里是具名插槽content的内容 </template>
      <!-- <template v-slot:header> 这里是具名插槽header的内容 </template> -->
      <template #header> 这里是具名插槽header的内容 </template>
    </test-slot>
  </div>

  <h1>作用域插槽</h1>
  <div class="slot-content">
    <p>
      作用域插槽就是在子组件中，将子组件的数据以属性的形式写在插槽上面，在父组件中，可以通过<strong>v-slot:default="slotprops"</strong>的方法取到子组件的属性
    </p>
    <p>
      作用域插槽的作用：能够取到子组件中的数据，使得能够在父组件上对其进行自定义
    </p>
    <scope-slot>
      <template v-slot:default="slotprops">
        <p class="scope-slot-item">
          {{ slotprops.item.id }} -- {{ slotprops.item.name }}
        </p>
      </template>
    </scope-slot>
  </div>

  <form-modal />

  <refs-test res="mia" num="12" prop-data="fadf" />

  <h1>非 prop 的 Attribute</h1>
  <component-b :pass-data="count" />
  <p>这里是最上层组件的数据{{ count }}</p>
  <a-button @click="count++">++++</a-button>

  <h1>渲染函数的用法</h1>
  <render-test blog-title="hello world">
    <template v-slot:header> afasdf </template>
  </render-test>

  <render-test blog-title="say hello">
    <template v-slot:header> say hello </template>
  </render-test>

  <h1>计算属性</h1>
  <compute-test msg="hello world" />
</template>


<script lang="ts">
import { defineComponent, ref } from "vue";
import TestSlot from "./components/TestSlot.vue";
import ScopeSlot from "./components/ScopeSlot.vue";
import FormModal from "./components/FormModal.vue";
import RefsTest from "./components/RefsTest.vue";
import ComponentB from "./components/ComponentB.vue";
import RenderTest from "./components/RenderTest.vue";
import ComputeTest from "./components/ComputeTest.vue";

export default defineComponent({
  components: {
    TestSlot,
    ScopeSlot,
    FormModal,
    RefsTest,
    ComponentB,
    RenderTest,
    ComputeTest,
  },
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  font-weight: bold;
  line-height: 30px;
}
.slot-content {
  margin-bottom: 24px;
}
.scope-slot-item {
  font-size: 18px;
  font-weight: bold;
  color: red;
}
</style>

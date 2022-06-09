<!--
 * @Author: Mia
 * @Date: 2022-04-11 14:49:57
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-12 13:11:22
 * @Description:
-->
<template>
  <a-button @click="modalOpen = true">
    Open full screen modal! (With teleport!){{ modalOpen }}
  </a-button>

  <div>
    Teleport 允许我们控制在DoM中哪个父节点下渲染了HTML, 而不必求助于全局状态或将其拆分成两个组件
  </div>
  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div class="modal-container">
        I'm a teleported modal! (My parent is "body")
        <a-button type="primary" @click="modalOpen = false" >Close</a-button>
      </div>
    </div>
  </teleport>

  <canvas style="background:green;" id="canvasTest">
    <div>12312323</div>
  </canvas>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const modalOpen = ref(false);

    const el = document.getElementById("canvasTest")
    console.log(el)

    return {
      modalOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .modal-container {
    width: 520px;
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    pointer-events: auto;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
}
</style>

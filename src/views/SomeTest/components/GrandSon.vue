<template>
  <div>孙组件</div>
  <div>
    从顶层组件传过来的值{{ msg }} - {{ userInfo.age }} - {{ userInfo.name }}
  </div>
  <div>
    从顶层组件传过来的值{{ msg }} - {{ supplierInfo.id }} -
    {{ supplierInfo.name }}
  </div>
  <a-button @click="() => update('123123')">update</a-button>
  <a-button></a-button>
</template>

<script>
import { inject } from "vue";
export default {
  name: "GrandSon",
  setup() {
    const msg = inject("msg") || "";
    const userInfo = inject("userInfo");
    const supplierInfo = inject("supplierInfo");
    const update = inject("update");
    setTimeout(() => {
      userInfo.age = 10000000;
    }, 5000);
    return {
      msg,
      userInfo,
      supplierInfo,
      update,
    };
  },
};
</script>
<style lang="scss" scoped></style>

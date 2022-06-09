<!--
 * @Author: Mia
 * @Date: 2021-12-28 11:18:02
 * @LastEditors: Mia
 * @LastEditTime: 2021-12-28 14:53:21
 * @Description:
-->
<template>
  <h1>lalalla</h1>
  <div class="origin">
    <div class="origin-title">{{ result?.origin?.title }}</div>
    <div class="origin-dynasty">[{{result?.origin?.dynasty}}] {{result?.origin?.author}}</div>
    <ul class="origin-list">
      <li v-for="item in result?.origin?.content" :key="item">{{ item }}</li>
    </ul>
  </div>

  <shan-bei />
</template>

<script>
import { onMounted, reactive, toRef } from "@vue/runtime-core";
import otherApi from "../../api/otherApi";
export default {
  setup() {
    const data = reactive({
      result,
    });
    onMounted(() => {
      otherApi.getJinrishici().then((res) => {
        console.log(res.data);
        data.result = res.data;
      });
    });

    const result = toRef(data, "result");

    return {
      data,
      result,
    };
  },
};
</script>
<style lang="scss" scoped>
.origin {
  &-title {
    font-size: 30px;
    font-weight: bold;
  }
  &-list {
    list-style: none;
  }
}
</style>

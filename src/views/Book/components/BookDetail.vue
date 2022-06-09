<!--
 * @Author: Mia
 * @Date: 2022-04-26 10:24:32
 * @Description:
-->
<template>
  <a-descriptions :column="1">
    <a-descriptions-item label="名称">{{ detail.title }}</a-descriptions-item>
    <a-descriptions-item label="作者">{{ detail.author }}</a-descriptions-item>
    <a-descriptions-item label="类型">
      <a-space>
        <a-tag v-for="item in detail.genreName" :key="item">
          {{ item }}
        </a-tag>
      </a-space>
    </a-descriptions-item>
    <a-descriptions-item label="描述">{{
      detail.description
    }}</a-descriptions-item>
    <a-descriptions-item label="图片">
      <a-image :width="200" :src="detail['image_url']" />
    </a-descriptions-item>
  </a-descriptions>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
  props: {
    detail: Object,
  },
  setup(props) {
    // const { detail } = toRefs(props)
    // const name = ref()
    // return {
    // }
  },
});
</script>

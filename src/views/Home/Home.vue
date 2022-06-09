<template>
  <div id="components-layout-demo-custom-trigger">
    <a-layout>
      <a-layout-sider
        v-model:collapsed="collapsed"
        collapsible
        theme="light"
        :trigger="null"
      >
        <div class="logo" />
        <a-menu
          theme="light"
          mode="inline"
          v-model:selectedKeys="selectedKeys"
          @click="handleClick"
          :default-select-keys="defaultSelectKeys"
        >
          <a-menu-item v-for="item in menuItem" :key="item.key">
            <router-link :to="item.path">
              <icon-font :type="item.icon" />
              <span>{{ item.name }}</span>
            </router-link>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <icon-font
            type="icon-right"
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <icon-font
            type="icon-left"
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <div class="user-container">lalalal</div>
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff',
            height: 'calc(100vh - 112px)',
            overflowY: 'scroll',
          }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
import { defineComponent, onBeforeMount, ref, onMounted, watch } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import menuItem from "./menuItem";

import { createFromIconfontCN } from "@ant-design/icons-vue";

const IconFont = createFromIconfontCN({
  // js 文件通过 iconfont 官网 symbol 生成
  scriptUrl: "//at.alicdn.com/t/font_2355012_kckrhsb8k6.js",
});

export default defineComponent({
  components: {
    IconFont,
  },

  setup() {
    const defaultSelectKeys = ref([1]);
    const route = useRoute();

    menuItem.forEach((item) => {
      if (item.path === route.path) {
        defaultSelectKeys.value = [item.key];
      }
    });

    const handleClick = (item, key, keyPath) => {
      console.log(item, key, keyPath);
    };

    return {
      route,
      handleClick,
      collapsed: ref(false),
      menuItem,
      selectedKeys: defaultSelectKeys,
      defaultSelectKeys,
    };
  },
});
</script>
<style lang="scss" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(252, 0, 0, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}

.user-container {
  float: right;
  margin-right: 20px;
}
</style>

<!--
 * @Author: Mia
 * @Date: 2021-10-14 14:47:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-27 13:12:21
 * @Description:
-->

# client

## 项目设置

```
npm install
```

### 编译和热重载

```
npm run serve
```

### 编译和构建

```
npm run build
```

### Lints 和修复文件

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### vue3 创建全局属性和方法

参考链接(https://segmentfault.com/a/1190000040224048)

vue3 中取消了过滤器 filter，如果组件中单独使用可以用 computed，watch 来替换。但是想全局创建一个之前的 Vue2 中的 filter，就需要在 vue 全局中挂载属性或者方法

1. 在 main.js 中创建方法，并将创建的方法挂载至全局

```javascript
import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "./assets/scss/global.scss";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
// 开始
const app = createApp(App);
// 创建方法
const dateTimeSub = (value) => {
  if (value) {
    return value.split(" ")[0];
  }
};
// 挂在全局方法
app.config.globalProperties.$filters = dateTimeSub;
// 主意这里改为app.use
app.use(store).use(router).use(ElementPlus).mount("#app");
```

2. 在组件内使用

```javascript
// 引入getCurrentInstance
import { reactive, ref, getCurrentInstance } from 'vue'
setup (props, {emit}) {
  // 获取全局属性和方法
  const { ctx, proxy } = getCurrentInstance()
  // ctx和proxy都可以访问到定义的全局方法，但是ctx只能在本地使用，线上环境使用proxy
  ...
  return {
    proxy
  }
```

```HTML
<template>
  <div>{{proxy.$filters('2020-06-22 10:55')}}<div>
</template>
```

## 记录一些开发问题

1. 父组件通过 子组件上的 ref 来获取 子组件的值（可以结合 expose 来使用）

2. getCurrentInstance 的使用 （获取全局配置的属性）

3. emit，在父组件中，给子组件加上 @<子组件中需要触发的字符>："父组件中定义的方法名"

```typescript
<Children @handleInChild: "handleInFather" />
```

4. expose, 在父组件中，给子组件加上 ref： exampleRef, 在子组件中，通过 expose({ 子组件中的方法名 }) 暴露方法名，
   在子组件中可以通过 exampleRef.value.子组件中的方法名，从而调用子组件中的方法

5. 关于组件逻辑拆分：

```

```

6. 使用 toRefs 来解决 props 由于结构从而失去响应性的问题

7. props 的使用

父组件中： 给子组件加 : 子组件接收的属性名="父组件中的值"
子组件中：需要先 props: {} 接收父组件中的值，然后在 setup(props) 中，使用 toRefs 对 props 进行解构

8. iconfont.cn 的使用方法

9. Vuex 的使用？？？

10. 监听当前页面路由的变化
```typescript
watch(
  () => route.path,
  () => {
    console.log("监听到变化");
  }
);
```

### 一些总结

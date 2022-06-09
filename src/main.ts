/*
 * @Author: Mia
 * @Date: 2021-10-14 14:47:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-27 13:57:04
 * @Description: 项目入口文件
 */
import vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from 'moment'
import {
  Button,
  Form,
  Input,
  Table,
  Menu,
  Layout,
  Col,
  Row,
  Card,
  Modal,
  Popconfirm,
  Select,
  Statistic,
  Space,
  Tooltip,
  Tag,
  Descriptions,
  Drawer,
  Image,
} from "ant-design-vue";
import 'ant-design-vue/dist/antd.less'

// 通过 createApp 来执行 Vue 的初始化
const app = createApp(App);
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn');

// app.config.globalProperties 相当于 vue2 中的 app.property
// 添加一个可以在应用的任何组件实例访问的全局 property
// 在具体的组件中,可以使用 getCurrentInstance 来获取proxy 该 proxy 可以在 template 中使用，并能获取全局的 property
app.config.globalProperties.$moment = moment;//赋值使用

app
  .use(Button)
  .use(Form)
  .use(Input)
  .use(Table)
  .use(Menu)
  .use(Layout)
  .use(Col)
  .use(Row)
  .use(Card)
  .use(Modal)
  .use(Popconfirm)
  .use(Select)
  .use(Statistic)
  .use(Space)
  .use(Tooltip)
  .use(Tag)
  .use(Descriptions)
  .use(Drawer)
  .use(Image)


app.use(store);
app.use(router);
app.mount("#app");

// createApp(App)

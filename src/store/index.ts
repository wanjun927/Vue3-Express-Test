/*
 * @Author: Mia
 * @Date: 2021-10-14 14:47:13
 * @LastEditors: Mia
 * @LastEditTime: 2021-10-15 13:15:29
 * @Description: 
 */
import { createStore } from "vuex";
import userInfo from "./userInfo"

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    userInfo: userInfo
  },
});

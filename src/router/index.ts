/*
 * @Author: Mia
 * @Date: 2021-10-14 14:47:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-26 11:40:08
 * @Description:
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    redirect: "/home",
    component: import(/* webpackChunkName: "home" */ "../views/Home/Home.vue"),
    children: [
      {
        path: "/userInfo",
        name: "UserInfo",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/UserInfo/UserInfo.vue"
          ),
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/book",
        name: "Book",
        component: () =>
          import(/* webpackChunkName: "book" */ "../views/Book/Book.vue"),
      },
      {
        path: "/home",
        name: "About",
        component: () =>
        import(/* webpackChunkName: "About" */ "../views/About.vue"),
      },
      {
        path: "/someTest",
        name: "SomeTest",
        component: () =>
        import(/* webpackChunkName: "SomeTest" */ "../views/SomeTest/SomeTest.vue"),
      },
      {
        path: "/other",
        name: "Other",
        component: () =>
        import(/* webpackChunkName: "About" */ "../views/Other/Other.vue"),
      },
      {
        path: "/mycomponents",
        name: "MyComponents",
        component: () =>
        import(/* webpackChunkName: "MyComponents" */ "../views/MyComponents/MyComponents.vue"),
      },
      {
        path: "/teleportTest",
        name: "TeleportTest",
        component: () =>
        import(/* webpackChunkName: "TeleportTest" */ "../views/TeleportTest/TeleportTest.vue"),
      },
      {
        path: "/tag",
        name: "Tag",
        component: () =>
        import(/* webpackChunkName: "Tag" */ "../views/Tag/Tag.vue"),
      }
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/Login.vue"),
    beforeEnter: (to, from, next) => {
      //to是当用户点击进入当前页面的时候,我们可以进行一些拦截设置
      //from当来自其他页面进入当前页面的时候，我们也可以进行拦截提示用户
      if (localStorage.getItem("token")) {
        next({ name: "About" });
      } else {
        next();
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("token", localStorage.getItem("token"));

  if (to.name !== "Login" && !localStorage.getItem("token")) {
    console.log("123123123123123");

    next({ name: "Login" });
  } else next();
});
export default router;

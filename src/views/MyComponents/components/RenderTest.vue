<!--
 * @Author: Mia
 * @Date: 2022-03-15 14:55:28
 * @LastEditors: Mia
 * @LastEditTime: 2022-03-15 15:52:27
 * @Description: 
-->
<script>
import { h } from "vue";

export default {
  props: ["blogTitle"],
  // setup() {
  //   },
  render() {
    return h(
      "div",
      {
        class: "test",
      },
      // this.blogTitle
      [
        h("div", {}, [
          h("div", {}, this.$slots.header()),
          h(
            "a",
            {
              href: "#",
              target: "_blank",
            },
            this.blogTitle
          ),
        ]),
      ]
    );
  },
};
</script>

<style lang="scss" scoped>
.test {
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 16px;
}
</style>

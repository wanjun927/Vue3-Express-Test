<!--
 * @Author: Mia
 * @Date: 2021-10-29 10:17:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-25 13:14:13
 * @Description:
-->
<template>
  <div>
    <a-button @click="handleCreateUser">新增用户</a-button>
    <a-table :data-source="userinfo" rowKey="_id">
      <a-table-column key="name" title="Name" data-index="name" />
      <a-table-column key="pwd" title="Password" data-index="pwd" />
      <a-table-column key="action" title="Action">
        <template #default="{ record }">
          <span>
            <a @click="() => handleDelete(record._id)">Delete</a>
          </span>
        </template>
      </a-table-column>
    </a-table>
    <a-modal
      :visible="visible"
      title="新增用户"
      okText="确认"
      cancelText="取消"
      :centered="true"
      @cancel="closeModal"
    >
      <create-user-form />
    </a-modal>
  </div>
</template>

<script>
import { ref } from "vue";
import userInfoApi from "../../api/userInfoApi";
import CreateUserForm from "../../components/CreateUserForm.vue";
import { useRouter } from "vue-router";
export default {
  name: "UserInfo",
  components: {
    CreateUserForm,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const route = useRouter();
    const userinfo = ref([]);
    userInfoApi.getUserInfo().then((res) => {
      console.log("log", res.data);
      if (res.code === 200) {
        userinfo.value = res.data;
      }
    });

    const visible= ref(false)

    const closeModal = () => {
      visible.value = false;
    };

    const handleDelete = (id) => {
      console.log(id);
    };

    const handleCreateUser = () => {
      visible.value=true
    };
    return {
      userinfo,
      handleDelete,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      handleCreateUser,
      visible,
      closeModal
    };
  },
};
</script>

<style lang="sass" scoped></style>

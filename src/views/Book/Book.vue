<!--
 * @Author: Mia
 * @Date: 2021-11-05 13:36:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-04-27 14:03:25
 * @Description:
-->
<template>
  <a-button type="primary" @click="showModal">新增</a-button>
  <a-modal
    :visible="visible"
    title="Basic Modal"
    @ok="handleOk"
    @cancel="closeModal"
    okText="确认"
    cancelText="取消"
    :destroyOnClose="true"
    :centered="true"
    :maskClosable="false"
    :width="1000"
  >
    <!-- TODO: ref 的使用方式 -->
    <create-book-form
      ref="formRef"
      @getBooksData="getBooksData"
      @closeModal="closeModal"
      :detail="detail"
      :isEdit="isEdit"
    />
  </a-modal>

  <a-table :data-source="booksData" rowKey="_id" :bordered="true">
    <a-table-column key="title" title="名称" data-index="title" />
    <a-table-column key="author" title="作者" data-index="author" />
    <a-table-column key="genre" title="类型" data-index="genreName">
      <template #default="{ text: genreName }">
        <span>
          <a-tag v-for="tag in genreName" :key="tag" color="blue">{{ tag }}</a-tag>
        </span>
      </template>
    </a-table-column>
    <a-table-column key="image_url" title="图片链接" data-index="image_url">
      <template #default="{text: img_url}">
        <a :href="img_url">{{img_url}}</a>
      </template>
    </a-table-column>
    <a-table-column key="view_url" title="查看链接" data-index="view_url" />
    <a-table-column
      key="description"
      title="Description"
      data-index="description"
    >
      <template #default="{ record }">
        <a-tooltip>
          <template #title>{{ record?.description }}</template>
          {{
            record?.description?.length === 0
              ? ""
              : record?.description?.length > 10
              ? `${record?.description?.slice(0, 10)}...`
              : record?.description
          }}
        </a-tooltip>
      </template>
    </a-table-column>
    <a-table-column key="create_date" title="CreateDate">
      <template #default="{ record }">
        <span>
          {{ proxy.$moment(record.create_date).format("YYYY-DD-MM HH:mm") }}
        </span>
      </template>
    </a-table-column>
    <a-table-column key="action" title="Action">
      <template #default="{ record }">
        <a-space :size="12">
          <span><a @click="() => handleDelete(record._id)">删除</a></span>
          <span>
            <a @click="() => handleEdit(record._id)">编辑</a>
          </span>
          <span>
            <a @click="() => handleViewDetail(record._id)">详情</a>
          </span>
        </a-space>
      </template>
    </a-table-column>
  </a-table>

  <a-drawer
    :visible="detailVisible"
    @close="detailVisible = false"
    :width="600"
    placement="right"
  >
    <book-detail :detail="detail" />
  </a-drawer>
</template>

<script>
import { ref, onMounted, getCurrentInstance } from "vue";
import CreateBookForm from "./components/CreateBookForm.vue";
import BookDetail from "./components/BookDetail.vue";
import bookApi from "../../api/bookApi";
import { message } from "ant-design-vue";

// 抽离一些逻辑
function useBook() {
  const booksData = ref([]);
  const getBooksData = async () => {
    const { data } = await bookApi.getBooksInfo();
    booksData.value = data;
  };
  onMounted(getBooksData);
  return {
    booksData,
    getBooksData,
  };
}

export default {
  components: {
    CreateBookForm,
    BookDetail,
  },
  setup() {
    // getCurrentInstance方法, 只能在 setup 和生命周期钩子中使用
    // ctx 只能在开发环境下使用
    // proxy 在开发环境和生产环境都能使用
    // const instance = getCurrentInstance 获取的是当前组件的实例
    const instance = getCurrentInstance();
    console.log("instance", instance);
    const { proxy } = getCurrentInstance();

    const visible = ref(false); // 弹窗显示
    const formRef = ref(null); // 表单数据
    const isEdit = ref(false);
    const detailVisible = ref(false);

    const { booksData, getBooksData } = useBook();

    const showModal = () => {
      isEdit.value = false;
      visible.value = true;
    };
    const closeModal = () => {
      visible.value = false;
    };

    const handleOk = () => {
      formRef.value.onSubmit();
      // visible.value = false;
    };

    const handleDelete = (id) => {
      console.log("id", id);
      bookApi.deleteBook({ id: id }).then((res) => {
        console.log("res", res);
        if (res.code === 200) {
          message.success("删除成功");
          // 调用接口更新列表数据
          getBooksData();
        }
      });
    };

    const detail = ref();
    const handleEdit = (id) => {
      bookApi.getBookDetail({ id: id }).then((res) => {
        res.data.genre = res.data.genre.map(item => Number(item))
        detail.value = res.data;
        visible.value = true;
        isEdit.value = true;
      });
    };

    const handleViewDetail = (id) => {
      bookApi.getBookDetail({ id: id }).then((res) => {
        detail.value = res.data;
        detailVisible.value = true;
      });
    };

    return {
      handleDelete,
      handleViewDetail,
      visible,
      showModal,
      handleOk,
      closeModal,
      formRef,
      proxy,
      booksData,
      getBooksData,
      handleEdit,
      detail,
      isEdit,
      detailVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>

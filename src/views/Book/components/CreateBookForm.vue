<!--
 * @Author: Mia
 * @Date: 2021-11-05 14:36:33
 * @LastEditors: Mia
 * @LastEditTime: 2023-06-09 16:19:27
 * @Description: 新增书籍 / 编辑书籍页
-->
<template>
  <a-form :rules="rules" ref="modalFormRef" :model="modelRef" :label-col="{span: 4}" :wrapper-col="{span: 20}">
    <a-form-item label="书名" name="title" :rules="rules.title">
      <a-input v-model:value="modelRef.title" placeholder="请输入名称"></a-input>
    </a-form-item>
    <a-form-item label="作者" name="author">
      <a-input v-model:value="modelRef.author" placeholder="请输入作者"/>
    </a-form-item>
    <a-form-item label="类型" name="genre">
      <a-select
        v-model:value="modelRef.genre"
        mode="multiple"
        :options="options"
        placeholder="请选择类型"
      />
    </a-form-item>
    <a-form-item label="查看链接">
      <a-input v-model:value="modelRef['view_url']"></a-input>
    </a-form-item>
    <a-form-item label="图片链接">
      <a-input v-model:value="modelRef['image_url']"></a-input>
    </a-form-item>
    <a-form-item label="名称">
      <a-input />
    </a-form-item>
    <a-form-item label="类型">
      <a-input placeholder="请输入类型" />
    </a-form-item>
    <a-form-item label="描述" name="description">
      <a-textarea
        placeholder="Basic usage"
        :rows="4"
        v-model:value="modelRef.description"
      />
    </a-form-item>
  </a-form>
</template>

<script>
import { onMounted, reactive, ref, toRaw, toRefs } from "vue";
import bookApi from "../../../api/bookApi";
import { message } from "ant-design-vue";
import tagApi from "../../../api/tagApi";

function useOptions() {
  const options = ref([]);

  const getOptions = () => {
    tagApi.getTagList().then((res) => {
      options.value = res.data.map((item) => {
        return {
          label: item.tagName,
          value: item.tagValue,
        };
      });
    });
  };

  onMounted(getOptions);

  return {
    options,
  };
}

export default {
  name: "CreateBookForm",
  props: {
    // 接收父组件中传递过来的值
    detail: Object,
    isEdit: Boolean,
  },
  setup(props, { expose, emit }) {
    const { detail, isEdit } = toRefs(props); // toRefs 解构保持响应性
    console.log("detail", detail);

    const modalFormRef = ref();
    // 根据 isEdit 初始化表单数据
    const modelRef = reactive(
      isEdit.value
        ? detail.value
        : {
            title: undefined,
            author: undefined,
            genre: [],
            view_url: undefined,
            image_url: undefined,
            description: undefined,
          }
    );

    const rules = {
      title: [
        {
          required: true,
          message: "请输入title",
          trigger: "blur",
        },
      ],
      author: [
        {
          required: true,
          message: "请输入author",
          trigger: "blur",
        },
      ],
      genre: [
        {
          required: true,
          message: "请选择类型",
          trigger: "blur",
          type: "array",
        },
      ],
      description: [
        {
          required: true,
          message: "请输入描述",
        },
      ],
    };

    const { options } = useOptions();

    const onSubmit = () => {
      modalFormRef.value.validateFields().then(() => {
        // modelRef.genre = modelRef.genre.join(",");
        let params = {
          _id: modelRef["_id"],
          title: modelRef.title,
          author: modelRef.author,
          genre: modelRef.genre,
          view_url: modelRef['view_url'],
          image_url: modelRef['image_url'],
          description: modelRef.description,
        };
        !isEdit.value
          ? bookApi
              .createBook(toRaw(modelRef))
              .then((res) => {
                if (res.code === 200) {
                  message.success("创建成功");
                } else {
                  message.error(res.msg);
                }
                console.log(res);
              })
              .finally(() => {
                // 刷新表格数据
                emit("getBooksData");
                // 关闭弹窗
                emit("closeModal");
              })
          : bookApi
              .updateBook(params)
              .then((res) => {
                if (res.code === 200) {
                  message.success("更新成功");
                } else {
                  message.error(res.msg);
                }
              })
              .finally(() => {
                // 刷新表格数据
                emit("getBooksData");
                // 关闭弹窗
                emit("closeModal");
              });
      });
    };

    expose({
      onSubmit,
    });

    return {
      rules,
      modelRef,
      modalFormRef,
      options,
    };
  },
};
</script>

<style lang="scss" scoped></style>

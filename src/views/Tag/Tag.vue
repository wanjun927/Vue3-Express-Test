<!--
 * @Author: Mia
 * @Date: 2022-04-26 11:38:05
 * @Description:
-->
<template>
  <a-button @click="visible = true">新增标签</a-button>
  <a-modal
    :visible="visible"
    title="新增tag"
    @ok="handleOk"
    @cancel="visible = false"
    :destroyOnClose="true"
    :centered="true"
    :maskClosable="false"
  >
    <a-form :model="formValue" ref="formRef">
      <a-form-item name="tagName">
        <a-input v-model:value="formValue.tagName" />
      </a-form-item>
    </a-form>
  </a-modal>
  <div class="tag-container">
    <a-tag class="tag-item" v-for="tag in tagList" :key="tag.tagValue" closable @close="()=>handleClose(tag.tagValue)"><span class="txt">{{
      tag.tagName
    }}</span></a-tag>
  </div>
  <a href="http://localhost:3000/view">view</a>
</template>

<script lang="ts">
import tagApi from "../../api/tagApi";
import { defineComponent, onMounted, reactive, ref, toRaw } from "vue";
import { message } from "ant-design-vue";

function useTag() {
  const tagList = ref([]);
  const getTagData = async () => {
    const { data } = await tagApi.getTagList();
    tagList.value = data;
  };

  onMounted(getTagData);

  return {
    tagList,
    getTagData,
  };
}

export default defineComponent({
  setup() {
    const visible = ref(false);
    const formRef = ref();

    const formValue = reactive({
      tagName: "",
    });

    const handleOk = () => {
      formRef.value.validate().then(() => {
        tagApi?.createTag(toRaw(formValue)).then((res: any) => {
          if (res.code === 200) {
            message.success("创建成功");
            visible.value = false;
            getTagData();
            formValue.tagName = ""
          } else {
            message.error("res");
          }
        });
      });
    };

    const { tagList, getTagData } = useTag();


    const handleClose = (tagValue: number) => {
      tagApi.deletTag({id: tagValue}).then((res:any) => {
        if(res.code === 200) {
          message.success('删除成功')
          getTagData()
        }
      })
    }

    return {
      visible,
      formValue,
      formRef,
      handleOk,
      tagList,
      handleClose
    };
  },
});
</script>


<style lang="scss" scoped>
.tag-container {
  margin-top: 10px;
  .tag-item {
    box-sizing: border-box;
    margin: 0 8px 0 0;
    color: #000000d9;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    display: inline-block;
    height: auto;
    padding: 4px 12px;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    background: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    opacity: 1;
    transition: all 0.3s;
    .txt {
      display: inline-block;
      padding-right: 4px;
    }
  }
}
</style>

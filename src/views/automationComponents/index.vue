<!--<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <component :is="item.type"></component>
    </div>
  </div>
</template>-->

<script>
import FormTable from "@/components/form-table";

import { WomanOutlined } from "@ant-design/icons-vue";
// 自动化组件配置参数
function automationData() {
  const list = [
    {
      type: "ButtonComponent",
      model: "",
      event: {
        search: (e) => {
          return []
        },
      },
    },
    {
      type: "InputComponent",
      model: "name",
      text: "名字",
      option: {
        textPosition: "left",
        placeholder: "自动化配置form表单",
        prefix: () => <WomanOutlined />,
      },
    },
    {
      type: "InputComponent",
      model: "doctor",
      text: "医生名字",
      option: {
        textPosition: "top",
        placeholder: "自动化配置form表单",
        prefix: () => "¥",
      },
    },
  ];
  return {
    list,
  };
}

export default {
  name: "automationComponents",
  components: {
    FormTable: FormTable,
  },
  setup() {
    const { list } = automationData();
    return { list };
  },
  render() {
    return (
      <div>
        <FormTable config={this.list} />
      </div>
    );
  },
};
</script>
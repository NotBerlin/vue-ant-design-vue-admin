<!--<template>
  <div>
    <div v-for="(item, index) in list" :key="index">
      <component :is="item.type"></component>
    </div>
  </div>
</template>-->

<script>
import FormTable from "@/components/form-table";

// 自动化组件配置参数
function automationData() {
  const list = [
    {
      type: "ButtonComponent",
      model: "",
      event: "search",
    },
    {
      type: "InputComponent",
      model: "name",
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
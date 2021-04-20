<template>
  <div>
    <div v-for="(item, index) in config" :key="index">
      <component
        :is="item.type"
        :options="item"
        v-if="item.type === 'ButtonComponent'"
        @search="search"
      ></component>
      <component :is="item.type" :options="item" v-else></component>
    </div>
  </div>
</template>

<script>
import InputComponent from "./InputComponent.vue";
import ButtonComponent from "./ButtonComponent.vue";
import emitter from "@/utils/eventBus";

export default {
  name: "form",
  components: {
    InputComponent: InputComponent,
    ButtonComponent: ButtonComponent,
  },
  setup(props, context) {
    const { config } = context.attrs;
    const search = function (data) {
      // fire an event
      emitter.emit("foo", data);
    };
    return { config, search };
  },
};
</script>
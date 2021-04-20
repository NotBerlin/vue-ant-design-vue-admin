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
import { reactive } from "@vue/reactivity";

export default {
  name: "form",
  components: {
    InputComponent: InputComponent,
    ButtonComponent: ButtonComponent,
  },
  setup(props, context) {
    const { config } = context.attrs;
    let form_config = {};
    config.forEach((element) => {
      if (element.type !== "ButtonComponent") {
        form_config[element.model] = "";
      }
    });
    const form = reactive(form_config);
    const search = function (data) {
      // fire an event
      emitter.emit("search", form);
    };
    emitter.on("form", (e) => {
      form[e.key] = e.value;
    });
    return { config, search, form };
  },
};
</script>
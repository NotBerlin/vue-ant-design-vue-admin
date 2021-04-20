<script>
import emitter from "@/utils/eventBus";
import { watch, ref } from "@vue/runtime-core";
export default {
  name: "InputComponent",
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    let value = ref("");
    const model = props.options.model;
    watch(value, (newValue, oldValue) => {
      //直接监听
      emitter.emit("form", { key: model, value: newValue });
    });
    return { value };
  },
  render() {
    const attrs = this.$attrs;
    return (
      <a-input
        value={this.value}
        onInput={(val) => (this.value = val.target.value)}
      />
    );
  },
};
</script>
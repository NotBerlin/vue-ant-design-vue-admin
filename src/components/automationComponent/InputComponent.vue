<script>
import emitter from "@/utils/eventBus";
import { watch, ref, Fragment } from "@vue/runtime-core";
import { UserOutlined } from "@ant-design/icons-vue";
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
    const label = props.options.text;
    const option = props.options.option;
    watch(value, (newValue, oldValue) => {
      //直接监听
      emitter.emit("form", { key: model, value: newValue });
    });
    return { value, label, option };
  },
  render() {
    const attrs = this.$attrs;
    const prefix = this.option.prefix();
    const inputC = (
      <a-input
        value={this.value}
        onInput={(val) => (this.value = val.target.value)}
        placeholder={this.option.placeholder}
        prefix={prefix}
      ></a-input>
    );
    return (
      <div>
        {this.option.textPosition === "left" ? (
          <Fragment>
            <UserOutlined type="user" />
            <span>{this.label}</span>
            {inputC}
          </Fragment>
        ) : (
          <Fragment>
            <div>{this.label}</div>
            {inputC}
          </Fragment>
        )}
      </div>
    );
  },
};
</script>
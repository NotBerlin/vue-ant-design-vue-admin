<script>
export default {
  name: "ButtonComponent",
  emits: ["search"],
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, context) {
    const clickBtn = function () {
      context.emit("search", {
        abc: "123",
      });
    };
    return { clickBtn };
  },
  render() {
    return <a-button onClick={this.clickBtn}>按钮</a-button>;
  },
};
</script>
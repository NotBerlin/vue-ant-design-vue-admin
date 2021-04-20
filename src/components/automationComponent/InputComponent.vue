<script>
export default {
  name: "InputComponent",
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  setup() {},
  render() {
    return <a-input />;
  },
};
</script>
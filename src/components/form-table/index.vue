<script>
import FormComponent from "../automationComponent";
import TableComponent from "../automationComponent/TableComponent.vue";
// import { mapGetters } from "vuex";
import emitter from "@/utils/eventBus";

export default {
  name: "form-table",
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    FormComponent: FormComponent,
    TableComponent: TableComponent,
  },
  setup(props, context) {
    // listen to an event
    emitter.on("search", (e) => {
      debugger
      console.log("foo", e)
    });
  },
  render() {
    return (
      <div>
        <FormComponent config={this.$props.config} />
        <TableComponent />
      </div>
    );
  },
};
</script>
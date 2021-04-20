<script>
import { Chart } from "@/plugin/g2";
import { onMounted, getCurrentInstance } from "vue";

// chart
function chart_test() {
  const data = [
    { year: "1951 年", sales: 38 },
    { year: "1952 年", sales: 52 },
    { year: "1956 年", sales: 61 },
    { year: "1957 年", sales: 145 },
    { year: "1958 年", sales: 48 },
    { year: "1959 年", sales: 38 },
    { year: "1960 年", sales: 38 },
    { year: "1962 年", sales: 38 },
  ];
  const chart = new Chart({
    container: "container",
    autoFit: true,
    height: 500,
  });

  chart.data(data);
  chart.scale("sales", {
    nice: true,
  });

  chart.tooltip({
    showMarkers: false,
  });
  chart.interaction("active-region");

  chart.interval().position("year*sales");

  chart.render();
}

export default {
  name: "g2",
  setup(props, context) {
    const {ctx} = getCurrentInstance();

    onMounted(() => {
      console.log("mounted!");
      chart_test();
    });
    return {};
  },
  render() {
    return (
      <div id="g2">
        <div id="container"></div>
      </div>
    );
  },
};
</script>


<style lang="scss" scoped>
#container {
  height: 200px;
  width: 300px;
}
</style>
<template>
  <Scatter
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
    ref="scatter"
  />
</template>

<script>
import xyData from "../assets/xy_records.json";
import { Scatter } from "vue-chartjs";
import DataLabelsPlugin from "chartjs-plugin-datalabels";
import ZoomPlugin from "chartjs-plugin-zoom";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  DataLabelsPlugin,
  ZoomPlugin
);

export default {
  mounted() {
    console.log(`the component is now mounted.`);
    setTimeout(() => {
      const chartInstance = this.$refs.scatter.chart;
      chartInstance.zoom(1.92);
      //   ChartJS.pan({
      //     x: Number.MAX_SAFE_INTEGER
      //   }, undefined, 'default');
    }, 100);
  },
  name: "WordScatterChart",
  components: { Scatter },
  props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => {},
    },
    plugins: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartData: {
        datasets: [
          {
            fill: false,
            label: ["Word Similarity"],
            borderColor: "#f87979",
            backgroundColor: "#f87979",
            radius: 1.5,
            data: xyData,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
              drawBorder: false,
            },
          },
        },
        plugins: {
          datalabels: {
            formatter: function (v) {
              return `${v.s} / ${v.e}`;
            },
            font: {
              size: 14,
            },
          },
          zoom: {
            pan: {
              enabled: true,
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: "xy",
            },
          },
        },
      },
    };
  },
};
</script>


<style scoped>
</style>

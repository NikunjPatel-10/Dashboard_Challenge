import React, { useEffect } from "react";
import CardHeader from "./UI/CardHeader";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Chart from "chart.js/auto";
const Tasks = () => {
  useEffect(() => {
    (async function () {
      Chart.register(ChartDataLabels);
      const data = {
        labels: ["Not Started(10)", "Completed(6)", "In Progress(2)"],
        datasets: [
          {
            data: [10, 6, 2],
            backgroundColor: ["#9da4ad", "#6acb6d", "#51cac2"],
            hoverOffset: 4,
          },
        ],
      };
      var options = {
        cutout: "95",
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          datalabels: {
            anchor: "end",
            align: "end",
            color: (chart) => {
              if (localStorage.getItem("theme")) {
                const color = chart.dataset.backgroundColor;
                return color[chart.dataIndex];
              }
            },
            font: {
              size: 16,
              weight: 600,
            },
          },
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              color: "#878d96",
            },
          },
        },
      };

      /**
       * for spacing between bar and label
       */
      const barheight = {
        id: "barheight",
        beforeInit(chart) {
          const originalHeight = chart.legend.fit;
          chart.legend.fit = function fit() {
            originalHeight.bind(chart.legend)();
            this.height += 50;
          };
        },
      };
      new Chart(document.getElementById("donut"), {
        type: "doughnut",
        data: data,
        options: options,
        plugins: [barheight],
      });
    })();
  }, []);

  return (
    <div className="p-3">
      <div>
        <CardHeader title={"Tasks"} />
      </div>
      <div className="task-chart">
        <canvas id="donut"></canvas>
      </div>
    </div>
  );
};

export default Tasks;

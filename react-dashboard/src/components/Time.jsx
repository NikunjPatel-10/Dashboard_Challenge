import React, { useEffect } from "react";
import CardHeader from "./UI/CardHeader";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const Time = () => {
  useEffect(() => {
    (async function () {
      localStorage.getItem("theme");
      const data = {
        labels: ["Planned Comple..", "Actual Completion", "Ahead"],
        datasets: [
          {
            label: ["Ahead"],
            data: [""],
            backgroundColor: "#3fadf3",
          },
          {
            label: ["Behind"],
            data: [""],
            backgroundColor: "#f7a652",
          },
          {
            label: ["On Time"],
            data: ["1", "14", "14"],
            backgroundColor: "#84bb5d",
          },
        ],
      };
      const options = {
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: "y",

        plugins: {
          legend: {
            position: "top",
            align: "start",
            labels: {
              usePointStyle: "true",
              pointStyle: "circle",
              position: "right",
              color: "#878d96",
            },
          },
          datalabels: {
            display: false,
          },
        },
        scales: {
          x: {
            border: {
              display: false,
            },
            grid: {
              color: "gray",
            },
            max: 100,
            min: -100,
            ticks: {
              stepSize: 25,
            },
          },
          y: {
            afterFit: function (scale) {
              scale.width = 110;
            },
            ticks: {
              font: 15,
            },
            crossAlign: "far",
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
      /**
       * for display percentage of the status
       */
      const customDataLabels = {
        id: "customDataLabels",
        afterDatasetsDraw(chart) {
          const {
            ctx,
            data,
            chartArea: { width },
          } = chart;
          ctx.save();
          data.datasets.forEach((res, indexOfSet) => {
            res.data.forEach((dataPoint, index) => {
              if (dataPoint > 0) {
                const { y } = chart
                  .getDatasetMeta(indexOfSet)
                  .data[index].tooltipPosition();

                ctx.fillStyle = res.backgroundColor;
                ctx.font = "15px sans-serif";
                if (dataPoint > 0) {
                  if (dataPoint[index] < 1) {
                    dataPoint = "0";
                  }
                  ctx.textAlign = "right";
                  ctx.textBaseline = "middle";
                  ctx.fillText(dataPoint + "%", width / 2 + 125, y);
                }
              }
            });
          });
        },
      };

      const ctx = document.getElementById("time");
      new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
        plugins: [barheight, customDataLabels],
      });
    })();
  }, []);
  return (
    <div className="p-3">
      <div>
        <CardHeader title={"Time"} />
      </div>
      <div className="time-chart">
        <canvas id="time"></canvas>
      </div>
    </div>
  );
};

export default Time;

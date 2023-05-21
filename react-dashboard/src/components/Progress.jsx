import React from "react";
import CardHeader from "./UI/CardHeader";
import Chart from "chart.js/auto";

import ChartDataLabels from "chartjs-plugin-datalabels";

import { useEffect } from "react";

const Progress = () => {
  useEffect(() => {
    (async function () {
      Chart.register(ChartDataLabels);
      const data = {
        labels: [
          "Contracts",
          "Design",
          "Procurement",
          "Construction",
          "Post Const...",
          "Project Clo...",
        ],
        datasets: [
          {
            label: "",
            data: [100, 80, 19, 0.5, 0.5, 0.5],
            backgroundColor: [
              "#84bb5d",
              "#84bb5d",
              "#de5a9c",
              "#868a95",
              "#868a95",
              "#868a95",
            ],
            barThickness: 50,
          },
        ],
      };
      const options = {
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: "y",
        plugins: {
          legend: {
            labels: {
              boxWidth: 0,
              color: "#f4f5f6",
            },
          },
          datalabels: {
            display: false,
          },
        },
        elements: {
          bar: {
            borderColor: "transparent",
            borderWidth: {
              top: 15,
              bottom: 15,
            },
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            afterFit: function (scale) {
              // console.log(scale);
              scale.width = 170;
            },
            ticks: {
              font: {
                size: 15,
              },
              color: "gray",
              crossAlign: "far",
            },
            grid: {
              display: false,
            },
          },
        },
      };

      /**
       * for display percentage of the status
       */
      const progressStatus = {
        id: "progressStatus",
        afterDatasetsDraw(chart) {
          const {
            ctx,
            data,
            chartArea: { top, bottom, left, right, width, height },
          } = chart;
          ctx.save();
          // console.log(data);
          data.datasets[0].data.forEach((dataPoint, index) => {
            const { x, y } = chart
              .getDatasetMeta(0)
              .data[index].tooltipPosition();

            ctx.font = "normal 16px sans-serif";
            ctx.fillStyle = data.datasets[0].backgroundColor[index];
            (ctx.align = "right"), (ctx.textBaseline = "middle");
            ctx.fillText(dataPoint + "%", 120, y);
          });
        },
      };

      const ctx = document.getElementById("progress");
      new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
        plugins: [progressStatus],
      });
    })();
  }, []);
  return (
    <div className="p-3">
      <div>
        <CardHeader title={"Progress"} />
      </div>
      <div className="progress-chart">
        <canvas id="progress"></canvas>
      </div>
    </div>
  );
};

export default Progress;

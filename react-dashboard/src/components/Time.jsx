import React, { useEffect } from "react";
import CardHeader from "./UI/CardHeader";
import Chart from "chart.js/auto";

const Time = () => {
  useEffect(() => {
    (async function () {
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
            },
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
        },
      };
      /**
       * for display percentage of the status
       */
      const timeStatus = {
        id: "timeStatus",
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
      const ctx = document.getElementById("time");
      new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
        plugins: [timeStatus],
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

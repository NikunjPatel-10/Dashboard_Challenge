import React, { useEffect } from "react";
import CardHeader from "./UI/CardHeader";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const Workload = () => {
  useEffect(() => {
    (async function () {
      localStorage.getItem("theme");
      const data = {
        labels: ["Mike", "Jenifer", "Brandon", "Sam", "George"],
        datasets: [
          {
            label: ["Completed"],
            data: [4, 2, 0, 0, 0],

            backgroundColor: "#84bb5d",
            barThickness: 50,
          },
          {
            label: ["Remaining"],
            data: [0, 2, 1, 3, 1],

            backgroundColor: "#54d2f9",
            barThickness: 50,
          },
          {
            label: ["Overdue"],
            data: [0, 0, 0, 0, 0],

            backgroundColor: "#f1504c",
            barThickness: 50,
          },
        ],
      };

      const options = {
        maintainAspectRatio: false,
        responsive: true,
        indexAxis: "y",
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
            border: {
              display: false,
            },
            grid: {
              color: "gray",
            },
            max: 8,
            ticks: {
              stepSize: 2,
            },
            stacked: true,
          },
          y: {
            stacked: true,
            ticks: {
              font: {
                size: 15,
              },
              crossAlign: "far",
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
            align: "start",
            labels: {
              color: "#878d96",
              usePointStyle: "true",
              pointStyle: "circle",
              position: "right",
            },
          },
          datalabels: {
            display: false,
          },
        },
      };

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

      const ctx = document.getElementById("workload");
      new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
        plugins: [barheight],
      });
    })();
  }, []);

  return (
    <div className="p-3 h-100 d-felx flex-column">
      <div>
        <CardHeader title={"Workload"} />
      </div>
      <div className="work-load">
        <canvas id="workload"></canvas>
      </div>
    </div>
  );
};

export default Workload;

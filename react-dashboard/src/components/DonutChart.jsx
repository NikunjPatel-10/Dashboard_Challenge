import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const DonutChart = () => {
  useEffect(() => {
    (async function () {
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
        cutout: "115",
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              color: "#b5b8c5",
            },
          },
        },
      };
      new Chart(document.getElementById("donut"), {
        type: "doughnut",
        data: data,
        options: options,
      });
    })();
  }, []);

  return (
    <div>
      <canvas id="donut"></canvas>
    </div>
  );
};

export default DonutChart;

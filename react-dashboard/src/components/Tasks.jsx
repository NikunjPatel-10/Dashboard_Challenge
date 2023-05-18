import React, { useEffect } from "react";
import CardHeader from "./UI/CardHeader";
import Chart from "chart.js/auto";
const Tasks = () => {
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

import React from "react";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import CardHeader from "./UI/CardHeader";
// import Utils from "chart.js/auto";
// import Utils from 'path/to/utils';

const Cost = () => {
  useEffect(() => {
    (async function () {
      new Chart(document.getElementById("barchart"), {
        type: "bar",
        data: {
          labels: ["January", "February", "March"],
          datasets: [
            {
              labels: ["Actual", "Plan", "Budget"],
              data: [1200, 1900, 300],
              backgroundColor: ["#84bb5d", "#54d2f9", "#4198e0"],
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })();
  }, []);
  return (
    <div className="h-100 d-flex flex-column">
      <div>
        <CardHeader title={"Cost"} />
      </div>
      <div className="flex-grow-1">
        <canvas id="barchart"></canvas>
      </div>
    </div>
  );
};

export default Cost;

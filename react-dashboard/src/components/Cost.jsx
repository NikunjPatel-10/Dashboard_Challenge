import React from "react";
import { useEffect } from "react";
import Chart from "chart.js/auto";
import CardHeader from "./UI/CardHeader";

const Cost = () => {
  useEffect(() => {
    (async function () {
      new Chart(document.getElementById("barchart"), {
        type: "bar",
        data: {
          labels: [""],
          datasets: [
            {
              label: ["Actual"],
              data: ["3.3"],
              backgroundColor: ["#84bb5d"],
              barThickness: "55",
            },

            {
              label: ["Plan"],
              data: ["4.5"],
              backgroundColor: ["#54d2f9"],
              barThickness: "55",
            },
            {
              label: ["Budget"],
              data: ["6"],
              backgroundColor: ["#4198e0"],
              barThickness: "55",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          /**
           * for gap between 2 elements
           */
          elements: {
            bar: {
              borderColor: "transparent",
              borderWidth: {
                left: 3,
                right: 3,
              },
            },
          },

          scales: {
            y: {
              beginAtZero: true,
              border: {
                display: false,
              },
              grid: {
                color: "gray",
              },
              ticks: {
                stepSize: 1.5,
                /**
                 * to display $ and k in y axis
                 * @param {*} value
                 * @param {*} index
                 * @returns
                 */
                callback: function (value, index) {
                  if (index == 0) {
                    return "$" + value;
                  } else {
                    return value + "k";
                  }
                },
              },
            },
            x: {
              display: false,
              ticks: {
                padding: 50,
              },
            },
          },
          plugins: {
            legend: {
              position: "top",
              align: "start",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                color: "#b5b8c5",
                position: "right",
              },
            },
          },
        },
      });
    })();
  }, []);
  return (
    <div className="h-100 d-flex flex-column p-3">
      <div>
        <CardHeader title={"Cost"} />
      </div>
      <div className="cost-chart">
        <canvas id="barchart"></canvas>
      </div>
    </div>
  );
};

export default Cost;

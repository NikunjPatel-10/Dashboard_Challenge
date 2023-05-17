import React, { useEffect } from "react";
import CardHeader from "./UI/CardHeader";
import Chart from "chart.js/auto";

const Workload = () => {
  useEffect(() => {
    (async function () {
      const data = {
        labels: ["Mike", "Jenifer", "Brandon", "Sam", "George", "abc"],
        datasets: [
          {
            label: "",
            data: [4, 4, 1, 3, 1],
            backgroundColor: [
              "#84bb5d",
              "#84bb5d",
              "#53d2f9",
              "#53d2f9",
              "#53d2f9",
            ],
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
            ticks: {
              stepSize: 1,
            },
          },
          y: {
            stacked: true,
          },
        },
        plugins: {
          legend: {
            labels: {
              boxWidth: 0,
              color: "#f4f5f6",
            },
          },
        },
      };

      new Chart(document.getElementById("workload"), {
        type: "bar",
        data: data,
        options: options,
      });
    })();
  }, []);

  return (
    <div className="p-3">
      <div>
        <CardHeader title={"Workload"} />
      </div>
      <div style={{ height: 300 }}>
        <canvas id="workload"></canvas>
      </div>
    </div>
  );
};

export default Workload;

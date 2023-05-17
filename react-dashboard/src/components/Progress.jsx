import React from "react";
import CardHeader from "./UI/CardHeader";
import Chart from "chart.js/auto";
import { useEffect } from "react";

const Progress = () => {
  useEffect(() => {
    (async function () {
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
            HTMLTextAreaElementafterFit: function (scale) {
              console.log(scale);
              scale.width = 100;
            },
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
            labels: {
              boxWidth: 0,
              color: "#f4f5f6",
            },
          },
        },
      };
      new Chart(document.getElementById("progress"), {
        type: "bar",
        data: data,
        options: options,
      });
    })();
  }, []);
  return (
    <div className="p-3">
      <div>
        <CardHeader title={"Progress"} />
      </div>
      <div style={{ height: "300px" }}>
        <canvas id="progress"></canvas>
      </div>
    </div>
  );
};

export default Progress;

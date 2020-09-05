import React from "react";
import { Bar } from "react-chartjs-2";

export default function Map({ totalCases, recovered, deaths, casesType }) {
  const data = {
    labels: ["Total Cases", "Death", "Recovery"],
    datasets: [
      {
        backgroundColor: [
          "rgba(93, 102, 53,0.7)",
          "rgba(102, 32, 33,0.7)",
          "rgba(82, 191, 115,0.7)",
        ],
        borderColor: [
          "rgba(93, 102, 53,1)",
          "rgba(102, 32, 33,1)",
          "rgba(82, 191, 115,1)",
        ],
        borderWidth: [3, 3, 3],
        data: [totalCases, deaths, recovered],
        // data: [1000, 600, 700],
      },
    ],
  };

  return (
    <div>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: "Corona Virus Overview",
            fontSize: 20,
          },
          legend: {
            display: false,
            position: "right",
          },
        }}
      />
    </div>
  );
}

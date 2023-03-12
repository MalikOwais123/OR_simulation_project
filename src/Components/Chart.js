import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getChartOptions = (simulationMeasures) => {
  return {
    responsive: true,
    //   maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem, data) {
          const index = tooltipItem.index;
          const datasetLabel =
            data.datasets[tooltipItem.datasetIndex].label || "";
          const serviceTime = data.datasets[0].data[index];
          const arrival = data.datasets[1].data[index];
          const waitTime = data.datasets[2].data[index];
          const customerId = simulationMeasures[index].customerId;
          return `${datasetLabel}: Service Time - ${serviceTime}, Turnaround Time - ${arrival}, Wait Time - ${waitTime}, Customer ID - ${customerId}`;
        },
      },
    },
  };
};

const getChartData = (simulationMeasures) => {
  return {
    labels: simulationMeasures.map((_, i) => `Customer ${i + 1}`),
    datasets: [
      {
        label: "Service Time",
        data: simulationMeasures.map((data) => data.serviceTime),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        lineTension: 0.1,
      },
      {
        label: "Arrival Time",
        data: simulationMeasures.map((data) => data.arrival),
        fill: false,
        borderColor: "rgba(192,75,192,1)",
        lineTension: 0.1,
      },
      {
        label: "Wait Time",
        data: simulationMeasures.map((data) => data.waitTime),
        fill: false,
        borderColor: "rgba(192,192,75,1)",
        lineTension: 0.1,
      },
    ],
  };
};

const Chart = ({ simulationMeasures }) => {
  const chartData = getChartData(simulationMeasures);
  const chartOptions = getChartOptions(simulationMeasures);
  return (
    <>
      <Typography
        sx={{
          fontSize: 30,
          fontWeight: "bold",
          mt: 3,
          mb: 3,
        }}
      >
        Queuing Graph
      </Typography>
      <Line options={chartOptions} data={chartData} />
    </>
  );
};

export default Chart;

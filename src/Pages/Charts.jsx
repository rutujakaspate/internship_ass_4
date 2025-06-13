import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { Bar, Line } from "react-chartjs-2";
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  zoomPlugin
);

const chartConfigs = {
  "Sales Trends": {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Sales",
          data: [400, 750, 600, 950, 680, 850],
          fill: false,
          borderColor: "rgb(54, 162, 235)",
          tension: 0.4,
          pointBackgroundColor: "#fff",
        },
      ],
    },
  },
  "Monthly Revenue": {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Revenue",
          data: [500, 600, 700, 800, 750, 900],
          backgroundColor: "rgba(255, 99, 132, 0.6)",
          borderRadius: 8,
        },
      ],
    },
  },
  "User Types": {
    type: "bar",
    data: {
      labels: ["Admin", "Manager", "Guest", "Editor"],
      datasets: [
        {
          label: "Users",
          data: [12, 19, 3, 5],
          backgroundColor: "rgba(153, 102, 255, 0.6)",
          borderRadius: 8,
        },
      ],
    },
  },
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top", labels: { color: "#333" } },
    title: { display: false },
    zoom: {
      pan: { enabled: true, mode: "x", modifierKey: "ctrl" },
      zoom: {
        wheel: { enabled: true },
        pinch: { enabled: true },
        mode: "x",
      },
    },
  },
  scales: {
    x: { ticks: { color: "#333" }, grid: { color: "#eee" } },
    y: { ticks: { color: "#333" }, grid: { color: "#eee" } },
  },
};

export default function Charts() {
  const [activeTab, setActiveTab] = useState("Sales Trends");

  const chartData = chartConfigs[activeTab];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-8 py-6">
      <div className="bg-white shadow-lg rounded-2xl p-6">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          {Object.keys(chartConfigs).map((tab) => (
            <button
              key={tab}
              className={`px-5 py-2 text-base font-medium ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Chart Area */}
        <div className="w-full h-[500px] md:h-[550px]">
          {chartData.type === "bar" ? (
            <Bar data={chartData.data} options={options} />
          ) : (
            <Line data={chartData.data} options={options} />
          )}
        </div>
      </div>
    </div>
  );
}

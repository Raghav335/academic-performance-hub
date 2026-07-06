import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { getCalculations } from "../../services/localStorageService";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function PerformanceChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const history = getCalculations();

    if (history.length === 0) {
      setChartData({
        labels: ["No Data"],
        datasets: [
          {
            label: "SGPA",
            data: [0],
            borderColor: "#3B82F6",
            backgroundColor: "rgba(59,130,246,0.3)",
            tension: 0.4,
            fill: true,
            pointRadius: 5,
          },
        ],
      });

      return;
    }

    const latest = [...history].reverse().slice(-10);

    setChartData({
      labels: latest.map((_, index) => `#${index + 1}`),

      datasets: [
        {
          label: "SGPA",
          data: latest.map((item) => Number(item.sgpa || 0)),
          borderColor: "#3B82F6",
          backgroundColor: "rgba(59,130,246,0.3)",
          tension: 0.4,
          fill: true,
          pointRadius: 5,
        },
      ],
    });
  }, []);

  const options = {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },

        grid: {
          color: "#334155",
        },
      },

      y: {
        min: 0,
        max: 10,

        ticks: {
          color: "#ffffff",
        },

        grid: {
          color: "#334155",
        },
      },
    },
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 mb-10 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-6">
        📈 Performance Analytics
      </h2><p className="text-slate-400 mb-6">
        Live SGPA trend from your saved calculations
      </p>

      <Line data={chartData} options={options} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Total Records
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {chartData.labels.length === 1 &&
            chartData.labels[0] === "No Data"
              ? 0
              : chartData.labels.length}
          </h2>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Highest SGPA
          </p>

          <h2 className="text-3xl font-bold mt-2 text-green-400">
            {chartData.datasets.length
              ? Math.max(...chartData.datasets[0].data).toFixed(2)
              : "0.00"}
          </h2>
        </div>

        <div className="bg-slate-800 rounded-2xl p-5">
          <p className="text-slate-400 text-sm">
            Average SGPA
          </p>

          <h2 className="text-3xl font-bold mt-2 text-blue-400">
            {chartData.datasets.length
              ? (
                  chartData.datasets[0].data.reduce(
                    (sum, val) => sum + val,
                    0
                  ) / chartData.datasets[0].data.length
                ).toFixed(2)
              : "0.00"}
          </h2>
        </div>

      </div>

    </div>
  );
}

export default PerformanceChart;
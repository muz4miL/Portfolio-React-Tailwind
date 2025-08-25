import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Users',
      data: [120, 210, 180, 260, 320, 400, 350],
      borderColor: '#8884d8',
      backgroundColor: 'rgba(136, 132, 216, 0.2)',
      tension: 0.4,
      pointBackgroundColor: '#fff',
      pointBorderColor: '#8884d8',
      pointRadius: 4,
      fill: true,
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: '#18181b',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#444',
      borderWidth: 1,
      cornerRadius: 8,
      padding: 12,
    },
  },
  scales: {
    x: {
      grid: { color: '#222' },
      ticks: { color: '#ccc' },
    },
    y: {
      grid: { color: '#222' },
      ticks: { color: '#ccc' },
    },
  },
};

export default function UserLineChart() {
  return (
    <div className="w-full rounded-xl bg-gray-900 p-6 shadow">
      <h3 className="mb-4 text-lg font-semibold">User Growth (Weekly)</h3>
      <Line data={data} options={options} height={180} />
    </div>
  );
}

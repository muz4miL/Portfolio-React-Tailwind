import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Signups',
      data: [10, 15, 8, 20, 5, 0, 0],
      backgroundColor: 'rgba(136, 132, 216, 0.8)', // #8884d8 with opacity
      borderRadius: 6,
      borderSkipped: false,
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

export default function SignUpsBarChart() {
  return (
    <div className="w-full rounded-xl bg-gray-900 p-6 shadow">
      <h3 className="mb-4 text-lg font-semibold">Signups (Weekly)</h3>
      <Bar data={data} options={options} height={180} />
    </div>
  );
}

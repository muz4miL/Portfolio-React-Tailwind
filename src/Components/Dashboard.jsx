import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import UserLineChart from './UserLineChart.jsx';
import SignUpsBarChart from './SignUpsBarChart.jsx';

const signupData = [
  { name: 'Mon', signups: 10 },
  { name: 'Tue', signups: 15 },
  { name: 'Wed', signups: 8 },
  { name: 'Thu', signups: 20 },
  { name: 'Fri', signups: 5 },
  { name: 'Sat', signups: 0 },
  { name: 'Sun', signups: 0 },
];

const data = [
  { name: 'Mon', users: 120 },
  { name: 'Tue', users: 210 },
  { name: 'Wed', users: 180 },
  { name: 'Thu', users: 260 },
  { name: 'Fri', users: 320 },
  { name: 'Sat', users: 400 },
  { name: 'Sun', users: 350 },
];

const CustomBar = (props) => {
  const { fill, x, y, width, height } = props;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      rx={6}
      fill={fill}
      opacity={0.9}
    />
  );
};

export default function Dashboard() {
  return (
    <section className="min-h-[70vh] bg-black p-8 text-white">
      <h2 className="mb-6 text-3xl font-bold">Analytics Dashboard</h2>
      <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-gray-900 p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold">Active Users</h3>
          <p className="text-2xl font-bold">400</p>
        </div>
        <div className="rounded-xl bg-gray-900 p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold">New Signups</h3>
          <p className="text-2xl font-bold">58</p>
        </div>
        <div className="rounded-xl bg-gray-900 p-6 shadow">
          <h3 className="mb-2 text-lg font-semibold">Conversion Rate</h3>
          <p className="text-2xl font-bold">7.2%</p>
        </div>
      </div>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <UserLineChart />
        <SignUpsBarChart />
      </div>
    </section>
  );
}

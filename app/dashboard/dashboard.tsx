"use client"

import NavBarCommon from "../nav_bar_common";
// Add imports for chart
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardAfterLogin() {

  // Pie chart data
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Demo Pie Chart',
        data: [30, 50, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <NavBarCommon />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to your Dashboard!</h1>
        <p>You have successfully logged in.</p>
        {/* Pie chart showcase */}
        <div style={{ maxWidth: 400, margin: '2rem auto' }}>
          <Pie data={data} />
        </div>
      </div>
    </div>
  );
}

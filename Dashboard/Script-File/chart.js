var chartOptions = {
  chart: {
    height: 400,
    type: 'line',
    fontFamily: 'Inter, sans-serif',
    toolbar: { show: false },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  series: [
    { name: 'Landing Page Product', data: [10, 20, 32, 42, 35, 30, 45, 40] },
    { name: 'Apartment App', data: [5, 25, 22, 35, 30, 40, 28, 35] },
    { name: 'Learning App', data: [15, 30, 40, 26, 45, 25, 38, 50] },
  ],
  xaxis: {
    categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  },
  markers: {
    size: 5,
    hover: { size: 8 },
  },
  grid: {
    borderColor: '#E0E0E0',
  },
  tooltip: {
    theme: 'dark',
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
};

var lineChart = new ApexCharts(document.querySelector('#line-chart'), chartOptions);
lineChart.render();
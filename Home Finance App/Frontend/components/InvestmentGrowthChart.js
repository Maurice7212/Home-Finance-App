import { Line } from 'react-chartjs-2';

const InvestmentGrowthChart = ({ data }) => {
    const chartData = {
        labels: data.map(entry => entry.year),
        datasets: [
            {
                label: 'Investment Growth',
                data: data.map(entry => entry.value),
                borderColor: '#4CAF50',
                fill: true,
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
            }
        ]
    };

    return <Line data={chartData} />;
};

export default InvestmentGrowthChart;

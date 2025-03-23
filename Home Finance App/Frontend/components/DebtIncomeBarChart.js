import { Bar } from 'react-chartjs-2';

const DebtIncomeBarChart = ({ data }) => {
    const chartData = {
        labels: data.map(entry => entry.month),
        datasets: [
            {
                label: 'Income',
                data: data.map(entry => entry.income),
                backgroundColor: '#4CAF50',
            },
            {
                label: 'Debt',
                data: data.map(entry => entry.debt),
                backgroundColor: '#F44336',
            }
        ]
    };

    return <Bar data={chartData} />;
};

export default DebtIncomeBarChart;

const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});


// Expense Trends Over Time
const expenseTrendsCtx = document.getElementById('expenseTrends').getContext('2d');
const expenseTrendsChart = new Chart(expenseTrendsCtx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
            label: 'Total Expenses',
            data: [25000, 26500, 28000, 31500],
            backgroundColor: 'rgba(228, 16, 16, 0.2 )',
            borderColor: 'rgba(228, 16, 16, 1)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Expense Trends Over Time (2024)'
            }
        }
    }
});
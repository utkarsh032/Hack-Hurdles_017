// Bar Chart
const ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Monthly Data',
            data: [400000, 500000, 600000, 40000, 1000000, 300000, 700000, 400000, 300000, 800000, 200000, 408000],
            backgroundColor: '#6833ff',
            borderColor: '#1D098F',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Progress Circle
const ctxProgress = document.getElementById('progressCircle').getContext('2d');
new Chart(ctxProgress, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [50, 50],
            backgroundColor: ['#6833ff', '#c9c7c7'],
            borderWidth: 0
        }]
    },
    options: {
        cutout: '70%',
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

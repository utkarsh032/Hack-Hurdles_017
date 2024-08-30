// Bar Chart
const ctxBar = document.getElementById('barChart').getContext('2d');
new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Monthly Data',
            data: [50000, 60000, 80000, 40000, 30000, 70000, 100000, 40000, 50000, 90000, 100000, 20000],
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
            data: [62, 38],
            backgroundColor: ['#6833ff', '#f1f1f1'],
            borderWidth: 0
        }]
    },
    options: {
        cutout: '80%',
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

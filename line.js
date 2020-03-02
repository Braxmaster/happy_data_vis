var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['10000$', '25000$', '50000$', '75000$', '100000$'],

        
        datasets: [{
            label: 'Average Happiness Index (American)',
            fill: false,    
            pointBorderColor: ['rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(217, 148, 44)','rgb(41, 158, 184)'],
            pointBackgroundColor: ['rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(217, 148, 44)','rgb(41, 158, 184)'],
            borderColor: 'rgb(177, 233, 245)',
            backgroundColor: 'rgb(177, 233, 245)',
            data: [3, 4.5, 7, 8, 7.5], /*Data points that maps an annual income value to a happiness index */
            pointRadius: 5,
            pointStyle: ['circle','circle','circle','rect','circle'],
            pointBorderWidth: 4,
            borderWidth: 2,
            hoverBorderWidth: 10,
            /*steppedLine: true,*/ 
    

        }]
    },

    // Configuration options go here
    options: {
        scales: {
            yAxes:[{
                scaleLabel:{
                    display: true,
                    labelString: 'Happiness Index',
                }
            }],
            xAxes:[{
                scaleLabel:{
                    display: true,
                    labelString: 'Annual Income',
                }
            }]
        }
    }
});
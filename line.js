var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['$5 000', '$10 000', '$20 000', '$40 000', '$80 000', '$95 000', '$100 000', '$160 000'],

        
        datasets: [{
            label: 'Global Life Evaluation',
            fill: false,    
            pointBorderColor: ['rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)', 'rgb(41, 158, 184)','rgb(255,192,203)','rgb(41, 158, 184)','rgb(41, 158, 184)'],
            pointBackgroundColor: ['rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(255,192,203)','rgb(41, 158, 184)','rgb(41, 158, 184)'],
            borderColor: 'rgb(177, 233, 245)',
            backgroundColor: 'rgb(177, 233, 245)',
          
            data: [5.1, 5.75, 6.5, 7.2, 7.65, 7.8, 7.65, 7.2],/*Data points that maps an annual income value to a happiness index */
            
          
            pointRadius: 5,
            pointStyle: ['circle','circle','circle','circle', 'circle', 'rect','circle','circle'],
            pointBorderWidth: 4,
            borderWidth: 2,
            hoverBorderWidth: 6,
            /*steppedLine: true,*/ 
    

        }, {
          label: 'Western Europe/Scandinavia',
            fill: false,    
            pointBorderColor: ['rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)', 'rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(255,192,203)','rgb(41, 158, 184)'],
            pointBackgroundColor: ['rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(41, 158, 184)','rgb(255,192,203)','rgb(41, 158, 184)'],
            borderColor: 'rgb(177, 233, 245)',
            backgroundColor: 'rgb(177, 233, 245)',
          
            data: [6.1, 6.4, 6.7, 7.4, 7.6, 7.75 ,7.8, 7.5], /*Data points that maps an annual income value to a happiness index */
            
          
            pointRadius: 5,
            pointStyle: ['circle','circle','circle','circle', 'circle', 'circle', 'rect','circle'],
            pointBorderWidth: 4,
            borderWidth: 2,
            hoverBorderWidth: 6,
        }]
    },

    // Configuration options go here
    options: {
      
      title: {
            display: true,
            text: 'Life Evaluation in Relation to Annual Income',
            fontSize: 22,
        },
        scales: {
            yAxes:[{
                scaleLabel:{
                    display: true,
                    labelString: 'Happiness Index (Mean)',
                  
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
var chartData = [{
    "sourceSystem": "abc",
    "value1": 3,
    "value2": 1,
    "value3": 5
},
{
    "sourceSystem": "xyz",
    "value1": 2,
    "value2": 6,
    "value3": 3
},
{
    "sourceSystem": "sdf",
    "value1": 1,
    "value2": 9,
    "value3": 3
},
{
    "sourceSystem": "uio",
    "value1": 8,
    "value2": 0,
    "value3": 5
},
{
    "sourceSystem": "abc",
    "value1": 2,
    "value2": 1,
    "value3": 5
},
{
    "sourceSystem": "xyz",
    "value1": 2,
    "value2": 6,
    "value3": 3
},
{
    "sourceSystem": "sdf",
    "value1": 1,
    "value2": 9,
    "value3": 3
},
{
    "sourceSystem": "uio",
    "value1": 8,
    "value2": 0,
    "value3": 5
},
{
    "sourceSystem": "abc",
    "value1": 2,
    "value2": 1,
    "value3": 5
},
{
    "sourceSystem": "xyz",
    "value1": 2,
    "value2": 6,
    "value3": 3
},
{
    "sourceSystem": "sdf",
    "value1": 1,
    "value2": 9,
    "value3": 3
},
{
    "sourceSystem": "uio",
    "value1": 8,
    "value2": 0,
    "value3": 5
},
{
    "sourceSystem": "abc",
    "value1": 2,
    "value2": 1,
    "value3": 5
},
{
    "sourceSystem": "xyz",
    "value1": 2,
    "value2": 6,
    "value3": 3
},
{
    "sourceSystem": "sdf",
    "value1": 1,
    "value2": 9,
    "value3": 3
},
{
    "sourceSystem": "uio",
    "value1": 8,
    "value2": 0,
    "value3": 5
}
];
AmCharts.makeChart("chartdiv2", {
    "type": "serial",
    "theme": "light",
    "columnSpacing": 0,
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
        "useGraphSettings": true,
        "markerSize": 10,
        "marginTop": 10
    },
    "dataProvider": chartData,
    "valueAxes": [{
        "id": "v1",
        "position": "left",
        "unitPosition": "left",
        "title": "Source System Issue Trends",
        "markPeriodChange": false
    }],
    "startDuration": 1,
    "graphs": [{
        "id": "g1",
        "fillAlphas": 0.9,
        "title": "value 1",
        "valueField": "value1",
        "type": "column",
        "valueAxis": "v1",
        "colorField": "color1",
        "outlineColor": "#0000ff",
        //"fixedColumnWidth": 30,
        "balloonText": "value1: <b>[[value]]</b>"
    },
    {
        "id": "g2",
        "fillAlphas": 0.9,
        "title": "value 2",
        "type": "column",
        "valueAxis": "v1",
        "colorField": "color2",
        //"outlineColor": "#0000ff",
        //"fixedColumnWidth": 30,
        "valueField": "value2",
        "balloonText": "value2: <b>[[value]]</b>"
    },
    {
        "id": "g3",
        "fillAlphas": 0.9,
        "title": "value 3",
        "type": "column",
        "valueAxis": "v1",
        "colorField": "color3",
        //"outlineColor": "#0000ff",
        //"fixedColumnWidth": 30,
        "valueField": "value3",
        "balloonText": "value3 : <b>[[value]]</b>"
    }
    ],

    "chartCursor": {
        "categoryBalloonDateFormat": "JJ:NN, DD MMMM",
        "cursorPosition": "mouse",
        "cursorAlpha": 0.1,
        "cursorColor": "#000000",
        "fullWidth": true,
        "valueBalloonsEnabled": true,
    },
    "categoryField": "sourceSystem",
    "categoryAxis": {
        "gridPosition": "start"
    },
    "export": {
        "enabled": true,
        "menu": []
    },
    "listeners": [{
        "event": "drawn",
        "method": addLegendLabel
    }]

});

function addLegendLabel(e) {
    var title = document.createElement("div");
    title.innerHTML = "Months";
    title.className = "legend-title";
    e.chart.legendDiv.appendChild(title)
}

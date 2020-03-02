
loadedData = false;
countryData = [];
happyRankData = [];
workTimeData = [];

var working_time_data = "workingtime.csv";



d3.csv(working_time_data).then(function (data) {

    loadedData = data;

    countryData = loadedData.map(x => x["country"]);
    happyRankData = loadedData.map(x => x["happiness ranking"]);
    workTimeData = loadedData.map(x => x["annual working time"]);

    console.log(countryData);

    createGraph();

});

function createGraph() {
    var chart = bb.generate({
        data: {
            xs: {
                "Happiness ranking": "workTime"
            },
            columns: [
                ["workTime"].concat(workTimeData),
                ["Happiness ranking"].concat(happyRankData)
            ],
            type: "scatter",
            labels: true
        },
        axis: {
            x: {
                label: "Sepal.Width",
                tick: {
                    fit: false
                }
            },
            y: {
                label: "Petal.Width",
                inverted: "true"
            }
        },
        bindto: "#scatterPlot"
    });
}
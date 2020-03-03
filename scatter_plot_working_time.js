
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
            labels: {
                format: {
                    "Happiness ranking": function (x) {
                        countryName = ""
                        happyRankData.forEach(element => {
                            if (x == element) {
                                countryName = countryData[happyRankData.indexOf(element)]
                            }
                        });
                        return countryName;
                    }
                }
            },
            names: {
                "Happiness ranking" : "Happiness Ranking"
            }
        },
        axis: {
            x: {
                label: "Working time (hours per year)",
                tick: {
                    fit: false
                }
            },
            y: {
                label: "Happiness ranking",
                inverted: "true"
            }
        },
      tooltip: {},
        bindto: "#scatterPlot"
    });
}
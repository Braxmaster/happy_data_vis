
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
                "Happiness ranking": "Happiness ranking"
            }
        },
        axis: {
            x: {
                label: "Working time",
                tick: {
                    fit: false
                }
            },
            y: {
                label: "Happiness ranking",
                inverted: "true"
            }
        },
        tooltip: {
            show: true,
            doNotHide: true,
            grouped: true,
            format: {
                title: function (x) {
                    countryName2 = ""
                    workTimeData.forEach(element => {
                        if (x == element) {
                            countryName2 = countryData[workTimeData.indexOf(element)]
                            return countryName2;
                        }
                    });
                    return countryName2;
                },
                name: function (name, ratio, id, index) { return "" + name; },
                value: function (value, ratio, id, index) { return "" + value; }
            }
        },
        bindto: "#scatterPlot"
    });
}
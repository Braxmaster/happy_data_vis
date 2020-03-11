var working_time_data = "cleaned_hm.csv";
loadedData = false;
var data_for_bill = [];

d3.csv(working_time_data).then(function (data) {

    loadedData = data;

    array_elements = loadedData.map(x => x["predicted_category"]);

    var words = getWordCount(array_elements);
    const keys = Object.keys(words);
    keys.forEach(element => {
        var element = [element, words[element]];
        data_for_bill.push(element);
    });
    console.log(data_for_bill);
    createChart();
});

function createChart() {
    var chart = bb.generate({
        data: {
            columns: data_for_bill,
            type: "pie"
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        bindto: "#barChartWords"
    });
}

function getWordCount(array) {
    let map = {};
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        map[item] = (map[item] + 1) || 1;
    }

    return map;
}
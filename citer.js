var working_time_data = "cleaned_hm.csv";
loadedData = false;

d3.csv(working_time_data).then(function (data) {

    loadedData = data;

    array_elements = loadedData.map(x => x["cleaned_hm"]);
    var info = document.getElementById("cite");
    info.innerHTML = '"' + array_elements[Math.floor(Math.random() * array_elements.length)] + '"'
});

function give_me_a_quote() {
    array_elements = loadedData.map(x => x["cleaned_hm"]);
    var info = document.getElementById("cite");
    info.innerHTML = '"' + array_elements[Math.floor(Math.random() * array_elements.length)] + '"'
}
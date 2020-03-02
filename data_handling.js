// Global variables
loadedData = false;
countriesData = false;

var working_time_data = "workingtime.csv";



d3.csv(working_time_data).then( function (data) {
    var dsv = d3.dsvFormat(";");
    var data = dsv.parse(text);    
  
    loadedData = data;

    drawBillboardPlot();

});
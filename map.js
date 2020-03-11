function my_theme(target) {
  if (target instanceof am4core.ColorSet) {
    target.list = [
      am4core.color("#CFCFCF")
    ];
  }
}

am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  am4core.useTheme(my_theme);
  // Themes end

  // Create map instance
  var chart = am4core.create("chartdiv", am4maps.MapChart);

  // Set map definition
  chart.geodata = am4geodata_worldLow;

  // Load data into chart
  /* chart.dataSource.url = "world-happiness-report-2019.csv";
  chart.dataSource.parser = new am4core.CSVParser();
  chart.dataSource.parser.options.useColumnNames = true; */

  // Set projection
  chart.projection = new am4maps.projections.Miller();

  chart.seriesContainer.draggable = false;
  chart.seriesContainer.resizable = false;
  chart.maxZoomLevel = 1;

  // Series for World map
  var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
  worldSeries.exclude = ["AQ"];
  worldSeries.useGeodata = true;

  var data = [];
  for (var i = 0; i < worldHappy.length; i++) {
    data.push({
      id: worldHappy[i].id,
      value: worldHappy[i].Ladder,
      freedomRanking: worldHappy[i].Freedom,
      socialSupport: worldHappy[i]["Social support"],
      corruption: worldHappy[i]["Corruption"],
      Generosity: worldHappy[i]["Generosity"],
      gpd: worldHappy[i]["Log of GDP\nper capita"],
      hlthExp: worldHappy[i]["Healthy life\nexpectancy"],
      country: worldHappy[i]["Country (region)"]
    })
  }

  worldSeries.data = data;

  worldSeries.heatRules.push({
    property: "fill",
    target: worldSeries.mapPolygons.template,
    min: am4core.color("#cafbff"),
    max: am4core.color("#023c41")
  })

  var polygonTemplate = worldSeries.mapPolygons.template;
  polygonTemplate.tooltipText = "{name} \n World Happiness Ranking: {value}";
  polygonTemplate.fill = chart.colors.getIndex(0);
  polygonTemplate.nonScalingStroke = true;

  polygonTemplate.events.on("hit", function (ev) {
    var data = ev.target.dataItem.dataContext;
    var info = document.getElementById("info");
    if (data.value) {
      info.innerHTML = "<h3> #" + data.value + " " + data.country + "</h3>";
      info.innerHTML += "<p>" +
      "Freedom Ranking: " + data.freedomRanking + "<br>" + 
      "Social Support Ranking: " + data.socialSupport + "<br>" +
      "Corruption: " + data.corruption + "<br>" + 
      "Generosity Ranking: " + data.Generosity + "<br>" + 
      "GPD Per Capita: " + data.gpd + "<br>" + 
      "Life Expectancy Ranking: " + data.gpd + "<br>" + 
      "</p>";
    }
    else {
      info.innerHTML = "<h3> #" + "?" + " " + "Undefined" + "</h3>";
      info.innerHTML += "<p>" +
      "Freedom Ranking: " + "No data..." + "<br>" + 
      "Social Support Ranking: " + "No data..." + "<br>" +
      "Corruption: " + "No data..." + "<br>" + 
      "Generosity Ranking: " + "No data..." + "<br>" + 
      "GPD Per Capita: " + "No data..." + "<br>" + 
      "Life Expectancy Ranking: " + "No data..." + "<br>" + 
      "</p>";
    }
  });

  // Hover state
  var hs = polygonTemplate.states.create("hover");
  hs.properties.fill = am4core.color("#FFC0CB");

  chart.legend = new am4maps.Legend();
  chart.legend.markers.template.disabled = true;
  chart.legend.labels.template.text = "{value}";

  /* let heatLegend = chart.createChild(am4maps.HeatLegend);
  heatLegend.series = worldSeries;
  heatLegend.align = "right";
  heatLegend.width = am4core.percent(25);
  heatLegend.marginRight = am4core.percent(4);
  heatLegend.minValue = 0;
  heatLegend.maxValue = 40000000;
  heatLegend.valign = "bottom";

  var minRange = heatLegend.valueAxis.axisRanges.create();
  minRange.value = heatLegend.minValue;
  minRange.label.text = "1";
  var maxRange = heatLegend.valueAxis.axisRanges.create();
  maxRange.value = heatLegend.maxValue;
  maxRange.label.text = "156";

  heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function (labelText) {
    return "";
  }); */

}); // end am4core.ready()
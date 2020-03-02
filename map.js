am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
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

    // Series for World map
    var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
    worldSeries.exclude = ["AQ"];
    worldSeries.useGeodata = true;

    var data = [];
    for (var i = 0; i < worldHappy.length; i++) {
        data.push({
            id: worldHappy[i].id,
            value: worldHappy[i].Ladder
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

    // Hover state
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = am4core.color("#FFC0CB");

    let heatLegend = chart.createChild(am4maps.HeatLegend);
  heatLegend.series = worldSeries;
  heatLegend.align = "right";
  heatLegend.width = am4core.percent(25);
  heatLegend.marginRight = am4core.percent(4);
  heatLegend.minValue = 0;
  heatLegend.maxValue = 40000000;
  heatLegend.valign = "bottom";

  var minRange = heatLegend.valueAxis.axisRanges.create();
  minRange.value = heatLegend.minValue;
  minRange.label.text = "Happy!";
  var maxRange = heatLegend.valueAxis.axisRanges.create();
  maxRange.value = heatLegend.maxValue;
  maxRange.label.text = "unhappy!";

  heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
    return "";
  });

}); // end am4core.ready()
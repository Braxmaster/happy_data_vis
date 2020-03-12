
var income = ["$5 000", "$10 000", "$20 000", "$40 000", "$80 000", "$95 000", "$100 000", "$160 000"]
var chart = bb.generate({
  data: {
    x: 'Income',
    columns: [
      ["Global",
        5.1,
        5.75,
        6.5,
        7.2,
        7.65,
        7.8,
        7.65,
        7.2],
      ["Scandinavia", 6.1,
        6.4,
        6.7,
        7.4,
        7.6,
        7.75,
        7.8,
        7.5],
      ["Income",
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
    ],
  },
  "axis": {
    "y":{
      label: "Happiness Index",
    },
    "x": {
      label: "Income",
      "tick": {
        "centered": false,
        "format": function (x) {
          return income[x]
        }
      }
    }
  },
  bindto: "#lineNew"
});
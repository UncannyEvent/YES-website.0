const WHITES = [
  630,
  700,
  688,
  649,
  643,
  583,
  596,
  528,
  605,
  582,
  503
];

const GREENS = [
  219,
  278,
  229,
  165,
  153,
  187,
  249,
  204,
  432,
  587,
  546
];

let REFLECTANCE = [];
for (var i = 0; i < WHITES.length; i++) {
  REFLECTANCE.push((GREENS[i] - 80) / (WHITES[i] - 83) * 100);
}

const COLORS = [
  "Blue",
  "Cyan",
  "Green",
  "Yellow",
  "Orange",
  "Red",
  "Deep Red",
  "IR1",
  "IR2",
  "IR3",
  "IR4"
];

white_plot = document.getElementById('white_plot');
var w_layout = {
  title: {
    text: "Reflectance of Colors on White Paper"
  },
  xaxis: {
    title: {
      text: 'Colors'
    }
  },
  yaxis: {
    title: {
      text: 'Reflectance'
    }
  }
};

Plotly.newPlot( white_plot, [{
  x: COLORS,
  y: WHITES }], w_layout );

green_plot = document.getElementById('green_plot');
var g_layout = {
  title: {
    text: "Reflectance of Colors on Green Paper"
  },
  xaxis: {
    title: {
      text: 'Colors'
    }
  },
  yaxis: {
    title: {
      text: 'Reflectance'
    }
  }
};

Plotly.newPlot( green_plot, [{
  x: COLORS,
  y: GREENS }], g_layout);

reflectance_plot = document.getElementById('reflectance_plot');
var r_layout = {
  title: {
    text: "Comparison of Color Reflectance"
  },
  xaxis: {
    title: {
      text: 'Colors'
    }
  },
  yaxis: {
    title: {
      text: 'Reflectance'
    }
  }
};

Plotly.newPlot( reflectance_plot, [{
  x: COLORS,
  y: REFLECTANCE }], r_layout );
/* DATA */

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

const HTMLCOLORS = [
  "Blue",
  "Cyan",
  "Green",
  "Yellow",
  "Orange",
  "Red",
  "Maroon",
  "#FFFFFF",
  "#AAAAAA",
  "#555555",
  "#000000"
];

/* PLOTS */
const W_LAYOUT = {
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

const G_LAYOUT = {
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

const R_LAYOUT = {
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

plot = document.getElementById("plot");
Plotly.newPlot(plot, [{
  x: COLORS,
  y: WHITES }], W_LAYOUT);

/* SWITCHING */
var mode = 0;

function white() {
  document.getElementById("subsection").innerHTML = "White Paper";
  mode = 0;
  Plotly.newPlot(plot, [{
    x: COLORS,
    y: WHITES }], W_LAYOUT);
}

function green() {
  document.getElementById("subsection").innerHTML = "Green Paper";
  mode = 1;
  Plotly.newPlot(plot, [{
    x: COLORS,
    y: GREENS }], G_LAYOUT);
}

function refl() {
  document.getElementById("subsection").innerHTML = "% Reflectance";
  mode = 2;
  Plotly.newPlot(plot, [{
    x: COLORS,
    y: REFLECTANCE }], R_LAYOUT);
}

function switchcolor(num) {
  console.log(num);
  document.getElementById("colorbox").innerHTML = COLORS[num] + " = " + [WHITES, GREENS, REFLECTANCE][mode][num] + " ";
  document.getElementById("colorbox").style.color = HTMLCOLORS[num];
}




var options = {

  // Les datas
  series: [
    70, // En ligne
    30, // Physique
  ],
  labels: ['En ligne', 'Physique'],
  colors: [
    '#9e50c3', // violet
    '#39adc5' // blue
  ],

  // Les options
  chart: {
    type: 'donut',
    height: '400px',
    width: '100%',
  },

  title: {
    text: "Moyen de réservation",
    align: "center",
    style: {
      fontSize: '20px',
    },
  },
  responsive: [{
    breakpoint: 850,
    options: {
      title: {
        style: {
          fontSize: '15px'
        }
      }
    }
  }],
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      donut: {
        background: '#d7d7d7',
        size: 20,
        labels: {
          show: false
        }
      }
    }
  },
  dataLabels: {
    show: true,
    enabled: true,
    formatter: function (val, opts) {
      // var values = opts.w.config.series[opts.seriesIndex];
      // var colors = opts.w.config.colors;
      var labels = opts.w.config.labels[opts.seriesIndex];
      return labels + ' ' + val + '%';
    },
    style: {
      fontSize: '16px',
    },
    dropShadow: {
      enabled: false,
      top: 0,
      left: 0,
      blur: 0,
      opacity: 1
    }
  }
}

var chart = new ApexCharts(
  document.querySelector("#BookingForm"),
  options
);

chart.render();

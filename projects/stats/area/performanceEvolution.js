var options = {
    chart: {
        height: 350,
        type: 'area',
        width: '100%'
    },
    dataLabels: {
        enabled: true,
    },
    stroke: {
        curve: 'smooth',
    },
    series: [{
        name: 'Planètes Câlins',
        data: [28, 29, 33, 36, 32, 32, 33],
    }, {
        name: 'A Petits Pas',
        data: [12, 11, 14, 18, 17, 13, 13]
    },
    {
        name: "Pomme Reinette",
        data: [4, 6, 2, 13, 23, 42, 20]
    }],
    colors: [
        '#d7d7d7', // grey
        '#9e50c3', // violet
        '#179fbb' // blue
    ],
    title: {
        text: 'Evolution de la performance',
        align: 'center',
        style: {
            fontSize: '25px',
        },
    },
    legend: {
        markers: {
            width: 20,
        }
    },
    xaxis: {
        categories: ['S48', 'S49', 'S50', 'S51', 'S52', 'S1', 'S2'],
    },
    yaxis: {
        show: false
    }
}

var chart = new ApexCharts(
    document.querySelector("#performanceEvolution"),
    options
);

chart.render();
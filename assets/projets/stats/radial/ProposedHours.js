var options = {
    chart: {
        height: '400px',
        type: 'radialBar',
        width: '100%',

    },
    title: {
        text: "Heures proposées",
        align: "center",
        margin: -20,
        style: {
            fontSize: '20px',
            color: '#263238',
        },
    },
    series: [100, // nombre d'heure du dernier mois
        50, // nombre d'heure de la dernière demaine
        1  // nombre d'heure de cette semaine
    ],
    labels: ['Le dernier mois', 'La semaine dernière', 'Cette semaine'],
    colors: ['#d7d7d7' // grey
        , '#179fbb', // blue
        '#9e50c3' // violet
    ],
    plotOptions: {
        radialBar: {
            startAngle: 5,
            endAngle: 180, // définit à quel angle se termine une jauge de valeur max
            track: {
                startAngle: 5,
                endAngle: 360,
            },
            dataLabels: {
                name: {
                    show: true,
                    fontSize: '18px'
                },
                value: {
                    show: true,
                    fontSize: '30px',
                    formatter: function (val) {
                        return val
                    }
                },
                total: {
                    show: true,
                    color: '#9e50c3',
                    fontSize: '30px',
                    label: 'Depuis le début',
                    formatter: function (w) {
                        return w.globals.seriesTotals.reduce((a, b) => {
                            return a + b
                        }, 0)
                    }
                }
            }
        }
    },
    stroke: {
        lineCap: "round",
    },
}

var chart = new ApexCharts(
    document.querySelector("#ProposedHours"),
    options
);

chart.render();
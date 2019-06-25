var options = {
    chart: {
        height: '400px',
        type: 'radialBar',
        width: '100%',
    },
    title: {
        text: "Taux d'occupation",
        align: "center",
        margin: -20,
        style: {
            fontSize: '20px',
            color: '#263238',
        },
    },
    series: [
        100, // heures proposées
        50, // heures réservées
    ],
    labels: ['Heures proposées', 'Heures réservées'],
    colors: [
        '#d7d7d7', // grey
        '#9e50c3', // violet
    ],
    plotOptions: {
        radialBar: {
            startAngle: -135,
            endAngle: 0, // définit à quel angle se termine une jauge de valeur max
            track: {
                startAngle: -135,
                endAngle: 135,
            },
            dataLabels: {
                name: {
                    show: true,
                    fontSize: '20px'
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
                    formatter: function (w) {
                        var total = w.globals.seriesTotals[0];
                        for (var i = 1; i < w.globals.seriesTotals.length; i++)
                            total = Math.floor((100 * w.globals.seriesTotals[i] / total));
                        return total + '%';
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
    document.querySelector("#OccupancyRate"),
    options
);

chart.render();
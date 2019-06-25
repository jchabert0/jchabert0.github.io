var hoursByWeek = 50; // capacité horaire par semaine

var options = {
    chart: {
        height: '400px',
        type: 'radialBar',
        width: '100%',
    },
    title: {
        text: "Capacité horaire",
        align: "center",
        margin: -20,
        style: {
            fontSize: '20px',
            color: '#263238',
        },
    },
    series: [100, // capacité horaire par mois
        1 // capacité horaire par jour
    ],
    labels: ['Par mois', 'Par jour'],
    colors: [
        '#d7d7d7', // grey
        '#9e50c3', // blue
    ],
    plotOptions: {
        radialBar: {
            startAngle: 10,
            endAngle: 180, // définit à quel angle se termine une jauge de valeur max
            track: {
                startAngle: 10,
                endAngle: 360,
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
                    label: 'Par semaine',
                    color: '#9e50c3',
                    fontSize: '30px',
                    formatter: function (val) {
                        // return val.config.series[1]
                        return hoursByWeek;
                        // on affiche la semaine en permanence                        
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
    document.querySelector("#HourlyCapacity"),
    options
);

chart.render();
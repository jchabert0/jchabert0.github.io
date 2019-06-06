var options = {
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            dataLabels: {
                position: 'top', // top, center, bottom
            },
        }
    },
    dataLabels: {
        enabled: true,
        formatter: function (val) {
            return val + "%";
        },
        offsetY: -20,
        style: {
            fontSize: '15px',
            colors: ["#179fbb"]
        }
    },
    series: [{
        data: [55, // lundi
            10, // mardi
            5, // mercredi
            20, // jeudi
            10], //vendredi
    }],
    xaxis: {
        categories: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'],
        position: 'top',
        labels: {
            offsetY: -18,
        },
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false
        },
        crosshairs: {
            fill: {
                type: 'gradient',
                gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                }
            }
        },
        tooltip: {
            enabled: true,
            offsetY: -35,

        }
    },
    fill: {
        colors: [
            '#179fbb', // blue
        ],
        gradient: {
            enabled: false,
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
        },
    },
    yaxis: {
        axisBorder: {
            show: false
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
            formatter: function (val) {
                return val + "%";
            }
        }

    },
    title: {
        text: 'Quand les parents font-ils leurs réservations ?',
        floating: true,
        offsetY: 320,
        align: 'center',
        style: {
            color: '#444',
            fontSize: '25px'
        }
    },
}

var chart = new ApexCharts(
    document.querySelector("#reservationsByParent"),
    options
);

chart.render();
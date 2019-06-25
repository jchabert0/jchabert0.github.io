var time = (Math.floor(Math.random() * 6) + 1); // number beetween 2 & 6
// ☰

var skill = new Vue({
    el: '#skill',
    data: {
        alert: ' Non responsive / utiliser desktop ou landscape ',
        projets: [
            {
                column: 'column is-10', title: 'Mon site V1',
                url: './assets/projets/site-v1/index.html',
                message: "HTML / CSS / Bootstrap à partir d'une maquette.",
                animation: 'animation-name: translatePos; animation-duration: 5s'
            },
            {
                column: 'column is-8  is-offset-4', title: 'Mon site V2',
                url: './assets/projets/site-version2/index.html',
                message: "HTML / SASS / VUE / BULMA from scratch. Je souhaitais une interface personelle ainsi q'une première approche de Vue.js et Bulma",
                animation: 'animation-name: translateNeg; animation-duration: 7s'
            },
            {
                column: 'column is-8', title: 'Combat Pokémon',
                url: './assets/projets/pokemon/src/index.html',
                message: "HTML/CSS/JS à mon école Simplon, il est mon tout premier projet.",
                animation: 'animation-name: translatePos; animation-duration: 9s'
            },
            {
                column: 'column is-7 is-offset-5', title: 'Statistiques',
                url: './assets/projets/stats/stats.html',
                message: 'JavaScript/ApexchartJS, représentation de statistiques par différents graphiques',
                animation: 'animation-name: translateNeg; animation-duration: 10s'
            },
            {
                column: 'column is-8', title: 'Drag & drop',
                url: './assets/projets/sortable/sortable.html',
                message: "JavaScript/Sortable.js, mise en place d'un drag & drop.",
                animation: 'animation-name: translatePos; animation-duration: 8s'
            },
            {
                column: 'column is-9  is-offset-3', title: 'Formulaire date',
                url: './assets/projets/date/form.html',
                message: "JavaScript exclusivement, validation des champs pour l'enregistrement d'une date.",
                animation: 'animation-name: translateNeg; animation-duration: 6s'
            },
        ]
    }
});

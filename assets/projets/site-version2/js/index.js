


document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {

                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});



var navbar = new Vue({ el: '#navbar' })

var header = new Vue({ el: '#header' })

var main = new Vue({
    el: '#main',
    data: {
        name: 'Jeremie Chabert',
        job: 'Developpeur web front-end',
        photo: './assets/photo/jeremie-jacket-color.jpg',
    }
})

var skill = new Vue({
    el: '#skill',
    data: {
        cards: [
            {
                id: 1, title: 'Langages',
                list: [
                    { text: 'HTML 5' },
                    { text: 'CSS 3' },
                    { text: 'SASS' },
                    { text: 'Javascript 6' },
                    { text: 'Php 7' },
                ]
            },
            {
                id: 2, title: 'Frameworks',
                list: [
                    { text: 'Vue.js' },
                    { text: 'Angular 7' },
                    { text: 'Symfony 4' },
                ],
            },
            {
                id: 3, title: 'Autres',
                list: [
                    { text: 'Git' },
                    { text: 'Agile' },
                    { text: 'Docker' },
                    { text: 'Bootstrap' },
                ]
            }
        ],
    }
})

var projects = new Vue({
    el: '#projects',
    data: {
        links: [
            { url: './assets/projets/cv/portfolio.html', title: 'CV interactif', text: 'Version interactive de mon CV en HTML, CSS et Javascript.' },
            { url: 'https://www.simplonlyon.fr/promo6/jchabert/pokemon_battle/src/', title: 'Combat Pokémon', text: 'Orienté objet, ce projet est ma première approche du Javascript.' },
            { url: './assets/projets/stats/stats.html', title: 'Statistiques', text: 'Représentation de statistiques par différents graphiques en ApexChart.js.' },
            { url: './assets/projets/sortable/sortable.html', title: 'Drag & drop', text: "Avec la librairie Sortable.js, mise en place d'un drag & drop." },
            { url: './assets/projets/date/form.html', title: 'Formulaire date', text: "Validation des champs pour l'enregistrement d'une date." },
        ]
    }
})


var footer = new Vue({ el:'#footer' })
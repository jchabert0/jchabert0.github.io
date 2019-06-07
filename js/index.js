


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
        messages: [
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
            },
        ]
    }
})

var projects = new Vue({
    el: '#projects',
    data: {
        messages: [
            {
                id: 1,
                title: 'Combat Pokémon',
                body: 'Orienté objet, ce projet est ma première approche du Javascript.',
                url: 'https://www.simplonlyon.fr/promo6/jchabert/pokemon_battle/src/',
            },
            {
                id: 2,
                title: 'CV interactif',
                body: 'Version interactive de mon CV en HTML, CSS et Javascript.',
                url: './assets/projets/cv/portfolio.html',
            },
            {
                id: 3,
                title: 'Statistiques',
                body: 'Représentation de statistiques par différents graphiques en ApexChart.js.',
                url: './assets/projets/stats/stats.html',
            },
            {
                id: 4,
                title: 'Drag & drop',
                body: "Avec la librairie Sortable.js, mise en place d'un drag & drop.",
                url: './assets/projets/sortable/sortable.html',
            },
            {
                id: 5,
                title: 'Formulaire date',
                body: "Validation des champs pour l'enregistrement d'une date.",
                url: './assets/projets/date/form.html',
            }
        ]
    }
})


var footer = new Vue({
    el: '#footer',
    data: {
        text: 'Design & développement by',
        dev: 'Jeremie Chabert'
    }
})
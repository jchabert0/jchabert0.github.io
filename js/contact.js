var contact = new Vue({
    el: '#contact',
    data: {
        followMe: 'Suivez-moi',
        contactMe: 'Contactez-moi',
        follows: [
            { url: 'https://www.linkedin.com/in/j%C3%A9r%C3%A9mie-chabert/', icon: 'fab fa-linkedin' },
            { url: 'https://gitlab.com/users/jeremieSIMPLON6/projects', icon: 'fab fa-gitlab' },
            { url: 'https://github.com/jchabert0/jchabert0.github.io', icon: 'fab fa-github' },
        ],
        contacts: [
            { title:'0750393910', url:'tel:+750393910', icon: 'fas fa-mobile-alt' },
            { title:'jchabert0@gmail.com', url:'mailto:jchabert0@gmail.com', icon: 'fas fa-at' },
        ],
        squares: [
            { style: 'height: 200px; width: 200px; right: 10px; top: 65px; animation-duration: 5s' },
            { style: 'height: 100px; width: 100px; right: 200px; top: 230px; animation-duration: 4s' },
            { style: 'height: 50px; width: 50px; right: 170px; top: 290px; animation-duration: 3s' },
            { style: 'height: 50px; width: 50px; right: 250px; top: 150px; animation-duration: 4s' },
            { style: 'height: 50px; width: 50px; right: 50px; top: 480px; animation-duration: 2s' },
            { style: 'height: 20px; width: 20px; right: 100px; top: 400px; animation-duration: 5s' },
            { style: 'height: 30px; width: 30px; right: 280px; top: 440px; animation-duration: 3s' },
        ]
    }
})
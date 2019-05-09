if (screen.width > 992) {
    ScrollReveal().reveal('.rounded-circle', {
        delay: 230,
        duration: 300,
        reset: true,
        origin: "left",
        distance: "350px"
    });

    ScrollReveal().reveal('.about-resume', {
        delay: 350,
        duration: 300,
        reset: true,
        origin: "right",
        distance: "350px"
    });

    ScrollReveal().reveal('.skills .card', {
        delay: 375,
        duration: 230,
        reset: true,
        origin: "left",
        distance: "350px",
        interval: "200"
    });
    ScrollReveal().reveal('.projects .card', {
        delay: 375,
        duration: 100,
        reset: true,
        origin: "left",
        distance: "300px",
        interval: "150"
    });


    ScrollReveal().reveal('.citation', {
        delay: 600,
        duration: 500,
        reset: true,
        origin: "bottom",
        distance: "350px"
    });

}

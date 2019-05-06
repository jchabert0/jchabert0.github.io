
function scrElement(card, origin, delay) {
  ScrollReveal().reveal(card, {
    origin: origin,
    distance: '50px',
    duration: 2000,
    delay: delay
  });
}

scrElement('.scrCard', 'right', 100);
scrElement('.citation', 'bottom', 0);
scrElement('.photo', 'left', 0);
scrElement('.about-resume', 'right', 200)

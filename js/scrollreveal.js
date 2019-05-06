
function cardScroll(card, origin) {
  ScrollReveal().reveal(card, {
    origin: origin,
    distance: '50px',
    duration: 2000
  });
}

cardScroll('.leftCard', 'left');
cardScroll('.rightCard', '.right');
cardScroll('.topCard', 'top');
cardScroll('.bottomCard', 'bottom');
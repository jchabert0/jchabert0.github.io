

var cart = new Cart();
// On initialize un planning à la création de la page
var planning = new Planning([1], cart);
document.getElementById('in_Empty').onclick = function () {planning.emptyWeek();}


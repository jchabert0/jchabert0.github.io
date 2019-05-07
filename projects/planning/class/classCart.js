
class Cart {
  constructor() {
    this.arraySelectedSlot = [];
    var that = this;
    
    document.getElementById('validSelected').addEventListener('click', function () {

      for (let i = 0; i < that.arraySelectedSlot.length; i++) {
        const selectedSlot = that.arraySelectedSlot[i];
        if (selectedSlot.selected === true) {
          selectedSlot.booked = true;
          selectedSlot.element.className = 'slot booked';
          selectedSlot.titleSlot('Déjà réservé de ');
        }
      }
    });
  }
}

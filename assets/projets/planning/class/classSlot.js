
class Slot {
  constructor(id, start, end, ageGroup, planning) {
    this.id = id; // integer
    this.start = start; // objet Date format (year, month, day, hours, minutes) => number
    // /!\ Janvier = 0
    // /!\ Lundi = 0
    this.end = end; // objet Date
    this.planning = planning; // objet Planning
    //this.eaje // identifiant de la crèche concernée
    this.ageGroup = ageGroup;
    this.selected = false;
    this.booked = false;
    this.column;
    var that = this;
    
    // Créer un slot
    this.element = document.createElement('div');
    this.element.style.width = this.planning.slotWidth + "%";
    document.getElementById('slotFocus').appendChild(this.element);
    this.element.className = 'slot';
    this.titleSlot('Sélectionner le');


    // Selectionner un slot
    that.element.addEventListener('click', function () {
      if (!that.booked) {
        if (!that.selected) {
          that.selected = true;
          that.element.className = 'slot selected';
          that.titleSlot('Désélectionner le');
          that.planning.cart.arraySelectedSlot.push(that);
        } else {
          that.selected = false;
          that.element.className = 'slot';
          that.titleSlot('Sélectionner le');
          that.planning.cart.arraySelectedSlot.splice(that, 1);
        }
      }
    });

    this.oneHourHeight // calcule la hauteur d'une heure (number)
      = ((parseInt(document.getElementById('slotFocus').style.height)) /
        this.planning.planningTimeRange);

    this.oneDayWidth = (parseInt(document.getElementById('slotFocus').style.width) / this.planning.nbrOpenDay);

    this.decimalStartHour = (this.getStartHours() + this.getStartMinutes() / 60);
    this.decimalEndHour = (this.getEndHours() + this.getEndMinutes() / 60);

    this.duration = this.decimalEndHour - this.decimalStartHour; // calcule l'amplitude horaire d'un slot (number)

    this.setHeight();
    this.setTop();
    this.setLeft();

    // les couleurs de slots en fonction de l'age
    this.setbgColor(0, "#9e50c3"); // tout age
    this.setbgColor(1, "#00f7ff"); // petit
    this.setbgColor(2, "#00aeff"); // moyen
    this.setbgColor(3, "#1900ff"); // grand
  }
  getFullYear() {
    return this.start.getFullYear();
  }
  getMonth() {
    return this.start.getMonth();
  }
  getMonthDay() { // retourne un nombre (0-31), le jour dans le mois
    return this.start.getDate();
  }
  getWeekDay() { // retourne un nombre (0-6), le jour dans la semaine
    return this.start.getDay();
  }
  getStartHours() {
    return this.start.getHours();
  }
  getStartMinutes() {

    return this.start.getMinutes();
  }
  getEndHours() {
    return this.end.getHours();
  }
  getEndMinutes() {
    return this.end.getMinutes();
  }
  getDuration() {
    return this.duration;
  }
  setHeight() {
    this.element.style.height = this.oneHourHeight * this.getDuration() + "%";
  }
  setTop() {
    this.element.style.top
      = ((this.decimalStartHour - this.planning.startHourMorning) * this.oneHourHeight) + "%";
  }
  setLeft() {
    this.column = this.planning.whatIsMyColumn(this);
    // console.log("this.column = " + this.column);
    this.element.style.left =
      ((this.getWeekDay() - 1) * this.oneDayWidth)
      + ((this.column - 1) * (this.planning.slotWidth + this.planning.slotSpacing))
      + this.planning.slotSpacing
      + "%";
  }
  setbgColor(age, bgColor) {
    if (this.ageGroup == age) {
      this.element.style.backgroundColor = bgColor;
    }
  }
  titleSlot(statuSlot) {

    this.element.title = `${statuSlot} ${this.start.toLocaleDateString("fr-Fr")} de ${this.start.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' })} à ${this.end.toLocaleTimeString("en-GB", { hour12: false, hour: '2-digit', minute: '2-digit' })}`;
  }
}
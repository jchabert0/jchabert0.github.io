
const arrayWeekdayFR = ["", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const arrayWeekdayShortFR = ["", "LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];

class Planning {
  constructor(arrayEaje, cart) {

    this.arrayEaje = arrayEaje;
    // ajax récupérer les infos des crèches
    this.startHourMorning = 8; // ajax // plus petite heure d'ouverture des crêches
    this.endHourMorning = 18; // ajax // plus grande heure de fermeture des crêches
    this.noonStart = "12:00:00"; // Number (returnObject.eajeInfo.AO_EAJE_minOpening.substring (0,2));
    this.noonEnd = "14:00:00";
    this.nbrOpenDay = 5; // ajax // plus grand nombre de jours d'ouverture des crêches
    this.nbrPeriodDay = 7; // nombre de jours entre deux périodes d'affichage

    this.element = document.createElement('div');
    this.planningTimeRange = this.endHourMorning - this.startHourMorning; // amplitude horaire de la crêche
    this.arrayData = [];
    this.arraySlot = [];
    this.slotWidth;
    this.slotSpacing;
    this.cart = cart;


    var that = this;

    // trouver les premier et dernier jours correspondant à today (quid si weekend? lundi suivant?)
    // this.startDay = new Date("2018-12-10");
    this.startDay = this.getMonday(new Date()); // on trouve le lundi correspondant
    this.whatAWeek();


    document.getElementById('planningFocus').appendChild(this.element);
    document.getElementById('previousWeek').addEventListener('click', function () {
      that.changePeriod(-that.nbrPeriodDay);
    });
    document.getElementById('nextWeek').addEventListener('click', function () {
      that.changePeriod(that.nbrPeriodDay);
    });
    this.drawCanevas();
    this.loadWeek(new Date());

  }

  getStartHourMorning() { //number
    return this.startHourMorning;
  }
  setStartHourMorning(hour) { //number
    return this.startHourMorning = hour;
  }
  getEndHourMorning() { //number
    return this.endHourMorning;
  }
  setEndHourMorning(hour) { //number
    return this.endHourMorning = hour;
  }
  getNbrOpenDay() { //number
    return this.nbrOpenDay;
  }
  setNbrOpenDay(day) { //number
    return this.nbrOpenDay = day;
  }
  getArrayData() { //array
    return this.arrayData;
  }
  setArrayData(data) { //array
    return this.arrayData = data;
  }
  // start NICOLAS
  getTimeDecimal(hour) { // sous format "hour:min:sec"
    return Number(hour.substring(0, 2) + "." + hour.substring(3, 5) / 60 * 100);
  }
  getNoonPosition(i) {
    if (i === 1) { // on calcule le positionnement de la ligne de démarrage du déjeuner
      return (this.getTimeDecimal(this.noonStart) - this.getStartHourMorning()) * 100 / this.planningTimeRange;
    }
    if (i === 2) { // on calcule la height de la plage horaire du déjeuner
      return (this.getTimeDecimal(this.noonEnd) - this.getTimeDecimal(this.noonStart)) * 100 / this.planningTimeRange;
    }
  }

  // end NICOLAS
  drawCanevas() {

    var planningHTML = " \
	<table class='planning' style='width:100%;'> \
      <tr class='txt-color4' id='trWeek' style='height: 10%;'> \
  ";
    // NICOLAS
    var today = new Date();
    //
    for (let i = 1; i <= this.nbrOpenDay; i++) {
      planningHTML += " \
        <td class='mobileInvisibility'> \
          <span class='ifwide'>" + arrayWeekdayFR[i] + "</span> \
		  <span class='ifnarrow'>" + arrayWeekdayShortFR[i] + "</span> \
        </td> \
        ";
    }

    planningHTML += "\
      </tr> \
    </table> \
    <div id='slotFocus' style='position:relative;width:100%;height: 100%;'> \
      <table class='planning' style='width: inherit;height: 400px;'> \
	";

    for (let i = 1; i <= 3; i++) {
      // NICOLAS
      planningHTML += "<tr style='height:" + this.getNoonPosition(i) + "%'>";
      for (let j = 1; j <= this.nbrOpenDay; j++) {
          planningHTML += "<td" + (today.getDay() !== j ? " class='mobileInvisibility'" : "") + "></td>";
      }
      planningHTML += "</tr>";

    }

    planningHTML += "\
      </table> \
    </div> \
	";

    this.element.innerHTML = planningHTML;

  }

  loadWeek() {

    // ajax pour récupérer les slots de la semaine de this.startDay pour les crèches concernées
    this.arrayData = [
      {
        id: "1",
        start: "2018-11-14 10:00:00", // 12 = lundi
        end: "2018-11-14 12:00:00",
        ageGroup: "0"
      },
      {
        id: "2",
        start: "2018-11-14 08:30:00",
        end: "2018-11-14 10:30:00",
        ageGroup: "1"
      },
      {
        id: "2",
        start: "2018-11-14 08:30:00",
        end: "2018-11-14 10:30:00",
        ageGroup: "2"
      },
      {
        id: "4",
        start: "2018-11-14 11:00:00",
        end: "2018-11-14 11:30:00",
        ageGroup: "3"
      },
      {
        id: "1",
        start: "2018-11-14 08:00:00", // 12 = lundi
        end: "2018-11-14 17:00:00",
        ageGroup: "3"
      },


      {
        id: "3",
        start: "2018-11-14 08:00:00",
        end: "2018-11-14 9:30:00",
        ageGroup: "2"
      },
      {
        id: "4",
        start: "2018-11-14 10:30:00",
        end: "2018-11-14 11:00:00",
        ageGroup: "0"
      },
      {
        id: "5",
        start: "2018-11-15 14:00:00",
        end: "2018-11-15 16:00:00",
        ageGroup: "0"
      },
      {
        id: "6",
        start: "2018-11-15 15:00:00",
        end: "2018-11-15 17:00:00",
        ageGroup: "1"
      },
      {
        id: "7",
        start: "2018-11-15 15:00:00",
        end: "2018-11-15 17:00:00",
        ageGroup: "1"
      }
    ];
    // empty week intégré?
    this.slotWidth = 4;
    this.slotSpacing = this.slotWidth / 10;
    for (let i = 0; i < this.arrayData.length; i++) {
      const data = this.arrayData[i];
      var slot = new Slot(data.id, new Date(data.start), new Date(data.end), data.ageGroup, this);
      this.arraySlot.push(slot);
    }
  }
  emptyWeek() {
    for (var i = 0; i < this.arraySlot.length; i++) {
      var slotDiv = this.arraySlot[i].element;
      slotDiv.parentNode.removeChild(slotDiv);
    }
    this.arrayData = [];
    this.arraySlot = [];
  }
  changePeriod(nbrDay) {
    var diff = this.startDay.getDate() + nbrDay;
    this.startDay.setDate(diff);
    this.emptyWeek();
    this.whatAWeek();
    this.loadWeek();
  }

  whatIsMyColumn(slot) {

    var arrayIsColumnEligible = [];
    var yourColumn = 0;

    for (let i = 0; i < this.arraySlot.length; i++) {
      const plgSlot = this.arraySlot[i];
      if (slot.getWeekDay() == plgSlot.getWeekDay()) {
        if ((slot.decimalEndHour <= plgSlot.decimalStartHour || slot.decimalStartHour >= plgSlot.decimalEndHour) && arrayIsColumnEligible[plgSlot.column] !== false)
          arrayIsColumnEligible[plgSlot.column] = true;
        else
          arrayIsColumnEligible[plgSlot.column] = false;
      }
    }
    // console.log(arrayIsColumnEligible);

    let i;
    for (i = 1; i < arrayIsColumnEligible.length; i++) {
      if (arrayIsColumnEligible[i] === true) break;
    }
    return i;
  }
  getMonday(date) {
    var day = date.getDay(),
      diff = date.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(date.setDate(diff));
  }
  whatAWeek() {
    var endDay = new Date(this.startDay.toDateString());
    var diff = endDay.getDate() + this.nbrOpenDay - 1;
    endDay.setDate(diff);
    document.getElementById('whatAWeek').innerHTML = `Semaine du ${this.startDay.toLocaleDateString("fr-Fr")} au ${endDay.toLocaleDateString("fr-Fr")}`;
  }

}


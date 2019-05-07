
function Care (data, planning) {

	this.data = data;
	this.planning = planning;
	this.element;

    var that = this;

    this.oneHourHeight // calcule la hauteur d'une heure (number)
      = ((parseInt(document.getElementById('slotFocus').style.height)) /
        this.planning.planningTimeRange);

    this.oneDayWidth = (parseInt(document.getElementById('slotFocus').style.width) / this.planning.nbrOpenDay);

    this.decimalStartHour = Number (this.data.AO_CARE_startHour) + (this.data.AO_CARE_startMinute / 60);
    this.decimalEndHour = Number (this.data.AO_CARE_endHour) + (this.data.AO_CARE_endMinute / 60);

    this.duration = this.decimalEndHour - this.decimalStartHour; // calcule l'amplitude horaire d'un slot (number)
  
	
	this.createCare = function () {

		// Créer un accueil
		this.element = document.createElement('div');
		_("slotFocus").appendChild(this.element);
		
		this.element.className = 'care';
		
		this.layoutElement ();
	}


  this.layoutElement = function () {
  
    this.element.style.height = this.oneHourHeight * this.duration + "%";
	
	this.element.style.top = ((this.decimalStartHour - this.planning.opening) * this.oneHourHeight) + "%";

		this.element.style.left =
		  ((this.data.AO_CARE_weekDay) * this.oneDayWidth)
		  + "%";
  };
  
	this.createCare ();
}

const arrayAgeGroup = [
	{	label : "Tout âge",	color : "#9e50c3"	},
	{	label : "Petits", 	color : "#00f7ff"	},
	{	label : "Moyens", 	color : "#00aeff"	},
	{	label : "Grands", 	color : "#1900ff"	}
	];

	class Slot_Pro extends Slot () {
	}
	
function Slot (data, planning, index) {

	this.data = data;
	this.planning = planning;
	this.index = index;
	this.hElement;
	this.vElement;
    //this.id = data.id; // integer
    //this.start = new Date (data.start); // objet Date format (year, month, day, hours, minutes) => number
    // /!\ Janvier = 0
    // /!\ Lundi = 0
    //this.end = new Date (data.end); // objet Date
    //this.eaje // identifiant de la crèche concernée
    //this.ageGroup = data.ageGroup;
    this.selected = false;
    this.booked = false;
    this.column;
    var that = this;

    this.oneHourHeight // calcule la hauteur d'une heure (number)
      = ((parseInt(document.getElementById('slotFocus').style.height)) /
        this.planning.planningTimeRange);

    this.oneDayWidth = (parseInt(document.getElementById('slotFocus').style.width) / this.planning.nbrOpenDay);

    this.decimalStartHour = Number (this.data.AO_SLOT_startHour) + (this.data.AO_SLOT_startMinute / 60);
    this.decimalEndHour = Number (this.data.AO_SLOT_endHour) + (this.data.AO_SLOT_endMinute / 60);

    this.duration = this.decimalEndHour - this.decimalStartHour; // calcule l'amplitude horaire d'un slot (number)
	
  this.getMonthDay = function () { // retourne un nombre (0-31), le jour dans le mois
    return this.start.getDate();
  };
  
  this.getWeekDay = function () { // retourne un nombre (0-6), le jour dans la semaine
    return this.start.getDay();
  };
  
  	this.createVSlot = function () {
	
		var hasSameDateThanPreviousSlot = (this.index > 0 && this.data.AO_SLOT_startDate == this.planning.arraySlot [this.index - 1].data.AO_SLOT_startDate);
	
		this.vElement = document.createElement('tr');
		this.vElement.id = "slot" + this.data.AO_SLOT_id;
		
		var vSlotHTML = " \
		<td class='colDate pivot nbsp'> \
		<div id='slotDate" + this.data.AO_SLOT_id + "' class='slotDate' data-idx='" + this.data.AO_SLOT_id + "'> \
			<span class='ifwide comment'>" + arrayWeekdayFR [this.data.AO_SLOT_weekDay] + "</span> \
			" + this.data.AO_SLOT_day + "/" + this.data.AO_SLOT_month + "<span class='ifwide'>/" + this.data.AO_SLOT_fullYear + "</span> \
		</div></td> \
		\
		<td id='slotStart" + this.data.AO_SLOT_id + "' class='colStart pivot nbsp'> \
		" + this.data.AO_SLOT_startHour + "<span class='ifwide'> H </span><span class='ifnarrow'>h</span>" + this.data.AO_SLOT_startMinute + " \
		</td> \
		\
		<td class='colTimeSep'>-</td> \
		\
		<td id='slotEnd" + this.data.AO_SLOT_id + "' class='colEnd pivot nbsp'> \
		" + this.data.AO_SLOT_endHour + "<span class='ifwide'> H </span><span class='ifnarrow'>h</span>" + this.data.AO_SLOT_endMinute + " \
		</td> \
		\
		<td><a id='in_EajeBtn" + this.data.AO_SLOT_id + "' class='link-color4' title='En savoir plus sur la crèche'>" + this.data.AO_EAJE_name + "</a> <span class='comment'>(" + this.data.AO_EAJE_dept + ")</span></td> \
		\
		<td class='pivot'><img " + imageSrc ("menu_agegroup" + this.data.AO_SLOT_group) + " title='" + arrayAgeGroup [this.data.AO_SLOT_group].label + "'></td> \
		\
		<td class='ifwide'>x " + this.data.AO_SLOT_count + "</td> \
		\
		<td class='nbsp'> \
		";
		if (this.data.AO_SLOT_isAvailable == "1")
			vSlotHTML += " \
			<button type='button' id='in_BookBtn" + this.data.AO_SLOT_id + "' data-idx='" + this.data.AO_SLOT_id + "' class='bookBtn buttonicon center bg-color1to4' title='Sélectionner'><img " + imageSrc ("menu_check-inv") + "></button> \
			";
		vSlotHTML += " \
		</td> \
		";
		
		this.vElement.innerHTML = vSlotHTML;
		document.getElementById('vSlots').appendChild(this.vElement);
		
		if (hasSameDateThanPreviousSlot) hide (_("slotDate" + this.data.AO_SLOT_id));
		
		this.vElementAttachment = document.createElement('tr');
		this.vElementAttachment.innerHTML = "<td colspan='8'><hr></td>";
		document.getElementById('vSlots').appendChild(this.vElementAttachment);
		
		if (this.data.AO_SLOT_isAvailable == "1")
			addEvent (_("in_BookBtn" + this.data.AO_SLOT_id), "click", function(e) { e.stopPropagation (); that.planning.cart.bookSlot (that); });
		addEvent (_("in_EajeBtn" + this.data.AO_SLOT_id), "click", function(e) { e.stopPropagation (); that.infoEaje (); });
	}
	
	this.createHSlot = function () {

		// Créer un slot
		this.hElement = document.createElement('div');
		this.hElement.style.width = this.planning.slotWidth + "%";
		
		_("slotFocus").appendChild(this.hElement);
		
		if (this.data.AO_SLOT_isAvailable == "1") {
		
			this.hElement.className = 'slot slotEnabled';
			
			this.hElement.innerHTML = " \
			<div> \
			<span>" + this.data.AO_SLOT_startHour + "</span><span>:</span><span>" + this.data.AO_SLOT_startMinute + "</span><br> \
			<span>" + this.data.AO_SLOT_endHour + "</span><span>:</span><span>" + this.data.AO_SLOT_endMinute + "</span><br> \
			<img " + imageSrc ("menu_home") + " title='" + this.data.AO_EAJE_name + "'> \
			<span>x " + this.data.AO_SLOT_count + "</span> \
			</div> \
			";
			
			this.hElement.title = "Réserver chez " + this.data.AO_EAJE_name;
//			ce créneau chez " + this.data.AO_EAJE_name + " pour le " + this.data.AO_SLOT_day+ "/" + this.data.AO_SLOT_month + " de " + this.data.AO_SLOT_startHour + ":" + this.data.AO_SLOT_startMinute + " à " + this.data.AO_SLOT_endHour + ":" + this.data.AO_SLOT_endMinute;
			
			addEvent (this.hElement, "click", function(e) { e.stopPropagation (); that.planning.cart.bookSlot (that); });
			
		} else {
		
			this.hElement.className = 'slot slotDisabled';
			/*
			this.hElement.innerHTML = " \
			<span>dès<br>" + this.data.AO_SLOT_availabilityDate + "<br>" + this.data.AO_SLOT_availabilityTime + "</span> \
			";
			
			//this.hElement.title = "Ce créneau sera disponible le " + this.data.AO_SLOT_availabilityDate + " à partir de " + this.data.AO_SLOT_availabilityTime;
			*/
			this.hElement.title = "Non disponible";
		}
		
		
		
		//this.titleSlot('Sélectionner le');
		
		this.layoutElement ();
	}
	
	this.createSlot = function () {
		this.createVSlot ();
		this.createHSlot ();
	}
	
	this.selectSlot = function () {
		if (!this.selected) {
			this.selected = true;
			this.hElement.className = "slot slotEnabled slotSelected";
		} else {
			this.selected = false;
			this.hElement.className = "slot slotEnabled";
		}
	}
	
	this.infoEaje = function () {
	
		_("eajeName").innerHTML = this.data.AO_EAJE_name;
		show(pop_mask);
		pop_div = _("pop_infoEaje");
		show(pop_div);
	}


    // Selectionner un slot
	/*
    that.hElement.addEventListener('click', function () {
      if (!that.booked) {
        if (!that.selected) {
          that.selected = true;
          that.hElement.className = 'slot selected';
          that.titleSlot('Désélectionner le');
          that.planning.cart.arraySelectedSlot.push(that);
        } else {
          that.selected = false;
          that.hElement.className = 'slot';
          that.titleSlot('Sélectionner le');
          that.planning.cart.arraySelectedSlot.splice(that, 1);
        }
      }
    });
	*/

  this.layoutElement = function () {
  
    this.hElement.style.height = this.oneHourHeight * this.duration + "%";
	
	this.hElement.style.top = ((this.decimalStartHour - this.planning.opening) * this.oneHourHeight) + "%";
	
	this.column = this.planning.whatIsMyColumn(this);
	
	if (this.column > 4) hide (this.hElement)
	else {
		this.hElement.style.left =
		  ((this.data.AO_SLOT_weekDay) * this.oneDayWidth)
		  + ((this.column - 1) * (this.planning.slotWidth + this.planning.slotSpacing))
		  + this.planning.slotSpacing
		  + "%";
	}
	  
	  //this.hElement.style.backgroundColor = arrayAgeGroup [this.data.AO_SLOT_group].color;
  };

  this.titleSlot = function (statuSlot) {

    this.hElement.title = statuSlot + " " + this.start.toLocaleDateString("fr-Fr") + " de " + this.start.toLocaleTimeString("en-GB", { hour: '2-digit', minute: '2-digit' }) + " à " + this.end.toLocaleTimeString("en-GB", { hour12: false, hour: '2-digit', minute: '2-digit' });
  };
  
	//this.layoutElement();
	this.createSlot ();
}
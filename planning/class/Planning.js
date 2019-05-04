
const arrayWeekdayFR = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
const arrayWeekdayShortFR = ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"];

function Planning(arrayEaje, cart) {

	this.arrayEaje = arrayEaje;
	this.cart = cart;

	this.arrayData = [];
	this.arraySlot = [];

	this.vElement = _("vSlots");
	this.hElement = _("hSlots");

	this.opening; // plus petite heure d'ouverture des crèches
	this.closing; // plus grande heure de fermeture des crèches
	this.planningTimeRange; // amplitude horaire des crèches
	this.nbrOpenDay = 5; // ajax // plus grand nombre de jours d'ouverture des crêches
	this.daysBetweenPeriods = 7;

	this.in_PrevWeek = _("in_PrevWeek");
	this.in_NextWeek = _("in_NextWeek");

	this.view; // v = vertical (list), h = horizontal (schedule)
	this.vViewBtn = _("in_VViewBtn");
	this.hViewBtn = _("in_HViewBtn");

	addEvent(this.in_PrevWeek, "click", function () { that.changePeriod(-1); });
	addEvent(this.in_NextWeek, "click", function () { that.changePeriod(+1); });

	addEvent(this.vViewBtn, "click", function () { that.setView("v"); });
	addEvent(this.hViewBtn, "click", function () { that.setView("h"); });

	this.pageLoader = _("pageLoader");
	this.slotsMenu = _("slotsMenu");
	this.pageEmpty = _("pageEmpty");
	this.eajeDescription = _("txt_EajeName");
	this.weekDescription = _("txt_WeekDescription");

	this.slotWidth;
	this.slotSpacing;

	var that = this;

	this.getEajeInfo = function () {

		var ajax_getEajes = {};
		ajax_getEajes.script = "get_eajes";
		ajax_getEajes.params = "";
		for (var i = 0; i < this.arrayEaje.length; i++) ajax_getEajes.params += "in_EajeId" + (i + 1) + "=" + this.arrayEaje[i] + "&";
		ajax_getEajes.params += "in_EajeCount=" + this.arrayEaje.length;
		ajax_getEajes.formdata = false;
		ajax_getEajes.progress = function (progress) {
		}
		ajax_getEajes.error = function (error) {
			if (error) showError(error);
			else showError("Erreur pendant la récupération des données.");
		}
		ajax_getEajes.abort = function () {
		}
		ajax_getEajes.load = function (returnObject) {

			that.arrayEaje = returnObject.eajes;
			that.opening = Number(returnObject.eajeInfo.AO_EAJE_minOpening.substring(0, 2));
			that.closing = Number(returnObject.eajeInfo.AO_EAJE_maxClosing.substring(0, 2));
			that.planningTimeRange = that.closing - that.opening;
			that.drawCanevas();
			that.loadWeek();
		}
		ajax_getEajes.loadEnd = function () {
		}
		ajaxCall(ajax_getEajes);
	}

	// Ajout Jérémie
	this.getTimeDecimal = function (hour) { // sous format "hour:min:sec"
		return Number(hour.substring(0, 2) + "." + hour.substring(3, 5) / 60 * 100);
	}
	this.getNoonPosition = function (i) {
		// on calcule le positionnement de la ligne de démarrage du déjeuner
		if (i === 1) return (this.getTimeDecimal(this.noonStart) - this.getStartHourMorning()) * 100 / this.planningTimeRange;
		// on calcule la height de la plage horaire du déjeuner
		if (i === 2) return (this.getTimeDecimal(this.noonEnd) - this.getTimeDecimal(this.noonStart)) * 100 / this.planningTimeRange;
	}
	//--------------------

	this.drawCanevas = function () {

		var planningHTML = " \
		<table class='planningDays' style='width:100%;'> \
		  <tr class='txt-color4' id='trWeek' style='height: 10%;'> \
		";
		// Ajout Jérémie
		var today = new Date();
		for (var i = 0; i < this.nbrOpenDay; i++) {
			var thenDay = new Date(this.startDay.toDateString());
			thenDay.setDate(thenDay.getDate() + i);
			planningHTML += " \
			<td> \
			  <span class='ifwide'>" + arrayWeekdayFR[i] + "</span> \
			  <span class='ifnarrow'>" + arrayWeekdayShortFR[i] + "</span> \
			  <br><span class='tiny'>" + thenDay.getDate() + "/" + (thenDay.getMonth() + 1) + "</span> \
			</td> \
			";
		}

		planningHTML += "\
		  </tr> \
		</table> \
		<div id='slotFocus' style='position:relative;width:100%;height: 100%;'> \
		  <table class='planning' style='width: inherit;height: 400px;'> \
		";

		for (var i = 1; i <= 3; i++) {
			// Ajout Jérémie
			planningHTML += "<tr style='height:" + this.getNoonPosition(i) + "%'>";
			for (var j = 1; j <= this.nbrOpenDay; j++) planningHTML += "<td" + (today.getDay() !== j ? " class='mobileInvisibility'" : "") + "></td>";
			//
			planningHTML += "</tr>";
		}

		planningHTML += "\
		  </table> \
		</div> \
		";

		this.hElement.innerHTML = planningHTML;
	};

	this.loadWeek = function () {

		var ajax_getSlots = {};
		ajax_getSlots.script = "get_slots";
		ajax_getSlots.params = "";
		for (var i = 0; i < arrayEaje.length; i++) ajax_getSlots.params += "in_EajeId" + (i + 1) + "=" + arrayEaje[i] + "&";
		ajax_getSlots.params += "in_EajeCount=" + arrayEaje.length;
		ajax_getSlots.params += "&in_StartDay=" + this.startDay.getFullYear() + "-" + (this.startDay.getMonth() + 1) + "-" + this.startDay.getDate();
		ajax_getSlots.params += "&in_EndDay=" + this.endDay.getFullYear() + "-" + (this.endDay.getMonth() + 1) + "-" + this.endDay.getDate();
		ajax_getSlots.formdata = false;
		ajax_getSlots.progress = function (progress) {
		}
		ajax_getSlots.error = function (error) {
			if (error) showError(error);
			else showError("Erreur pendant la récupération des données.");
		}
		ajax_getSlots.abort = function () {
		}
		ajax_getSlots.load = function (returnObject) {
			console.log(returnObject);
			that.arrayData = returnObject.slots;

			that.slotWidth = 4;
			that.slotSpacing = that.slotWidth / 10;

			for (var i = 0; i < returnObject.cares.length; i++) {
				var care = new Care(returnObject.cares[i], that);
			}

			for (var i = 0; i < that.arrayData.length; i++) {
				var data = that.arrayData[i];
				var slot = new Slot(data, that, i);
				that.arraySlot.push(slot);
			}

			if (!that.view) that.view = "h";
			that.setView(that.view);
		}
		ajax_getSlots.loadEnd = function () {
		}
		ajaxCall(ajax_getSlots);
	};

	this.reloadWeek = function () {
		hide(this.pageEmpty);
		show(this.pageLoader);
		this.emptyWeek();
		this.loadWeek();
	}

	this.emptyWeek = function () {
		for (var i = 0; i < this.arraySlot.length; i++) {
			var slotHDiv = this.arraySlot[i].hElement;
			var slotVDiv = this.arraySlot[i].vElement;
			var slotVDivAttachment = this.arraySlot[i].vElementAttachment;
			slotHDiv.parentNode.removeChild(slotHDiv);
			slotVDiv.parentNode.removeChild(slotVDiv);
			slotVDivAttachment.parentNode.removeChild(slotVDivAttachment);
		}
		this.arrayData = [];
		this.arraySlot = [];
	};

	this.changePeriod = function (direction) {

		hide(this.pageEmpty);
		show(this.pageLoader);
		this.startDay.setDate(this.startDay.getDate() + (this.daysBetweenPeriods * direction));
		this.setEndDay();
		this.emptyWeek();
		this.weekDescription.innerHTML = "du " + this.startDay.getDate() + "/" + (this.startDay.getMonth() + 1) + " au " + this.endDay.getDate() + "/" + (this.endDay.getMonth() + 1);
		this.drawCanevas();
		this.loadWeek();
	}

	this.getMonday = function (dateObj) {
		var day = dateObj.getDay(),
			diff = dateObj.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
		return new Date(dateObj.setDate(diff));
	};

	this.setEndDay = function () {
		this.endDay = new Date(this.startDay.toDateString());
		this.endDay.setDate(this.endDay.getDate() + this.nbrOpenDay - 1);
	}

	this.whatIsMyColumn = function (askingSlot) {

		var arrayIsColumnEligible = [];
		var yourColumn = 0;

		for (var i = 0; i < this.arraySlot.length; i++) {
			var plgSlot = this.arraySlot[i];
			if (askingSlot.data.AO_SLOT_weekDay == plgSlot.data.AO_SLOT_weekDay) {
				if ((askingSlot.decimalEndHour <= plgSlot.decimalStartHour || askingSlot.decimalStartHour >= plgSlot.decimalEndHour) && arrayIsColumnEligible[plgSlot.column] !== false)
					arrayIsColumnEligible[plgSlot.column] = true;
				else
					arrayIsColumnEligible[plgSlot.column] = false;
			}
		}
		// console.log(arrayIsColumnEligible);

		for (var i = 1; i < arrayIsColumnEligible.length; i++) {
			if (arrayIsColumnEligible[i] === true) break;
		}
		return i;
	}

	this.setView = function (view) {

		this.view = view;
		switch (view) {
			case "v":
				hide(this.vViewBtn);
				hide(this.hElement);
				show(this.hViewBtn);
				show(this.vElement);
				break;
			case "h":
				hide(this.hViewBtn);
				hide(this.vElement);
				show(this.vViewBtn);
				show(this.hElement);
				break;
		}
		hide(this.pageLoader);

		if (this.arrayData.length) {
			show(this.slotsMenu);
			hide(this.pageEmpty);
		} else {
			show(this.pageEmpty);
		}
	}

	this.startDay = this.getMonday(new Date());
	this.setEndDay();

	this.getEajeInfo();
}

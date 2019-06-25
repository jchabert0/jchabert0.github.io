
function Cart () {

	this.arraySelectedSlot = [];
	
	this.bookingSlot;
	
	this.bookingSlotDesc = _("bookingSlot");
	this.bookingEajeDesc = _("bookingEaje");	
	this.in_BookChild = _("in_BookChild");
	this.in_BookStartHour = _("in_BookStartHour");
	this.in_BookStartMinute = _("in_BookStartMinute");
	this.in_BookEndHour = _("in_BookEndHour");
	this.in_BookEndMinute = _("in_BookEndMinute");
	this.in_bookingYes = _("in_bookingYes");
	
	this.xhr_bookSlot;

	var that = this;
	
	//addEvent (this.bookingEajeDesc, "click", function(e) { that.bookingSlot.infoEaje (); });
	addEvent (this.in_bookingYes, "click", function(e) { that.confirmSlotBooking (); });
	
	this.bookSlot = function (slotObj) {
	
		this.bookingSlot = slotObj;
	
		this.bookingSlotDesc.innerHTML = _("slotDate" + slotObj.data.AO_SLOT_id).innerHTML + "<br>de " + _("slotStart" + slotObj.data.AO_SLOT_id).innerHTML + " à " + _("slotEnd" + slotObj.data.AO_SLOT_id).innerHTML;
		this.bookingEajeDesc.innerHTML = slotObj.data.AO_EAJE_name;
		
		initTimeValidation (this.in_BookStartHour, this.in_BookStartMinute, this.in_BookEndHour, this.in_BookEndMinute, this.in_bookingYes);
		this.in_BookStartHour.value = slotObj.data.AO_SLOT_startHour;
		this.in_BookStartMinute.value = slotObj.data.AO_SLOT_startMinute;
		this.in_BookEndHour.value = slotObj.data.AO_SLOT_endHour;
		this.in_BookEndMinute.value = slotObj.data.AO_SLOT_endMinute;
		//in_bookingYes.dataset.idx = this.dataset.idx;
		
		show(pop_mask);
		pop_div = _("pop_confirmBooking");
		show(pop_div);
		this.in_bookingYes.focus ();
	}
	
	this.confirmSlotBooking = function () {
	
		if (mh() && mm() && ah() && am()) {
			var bookStartTime = this.in_BookStartHour.value + ":" + this.in_BookStartMinute.value + ":00";
			var bookEndTime = this.in_BookEndHour.value + ":" + this.in_BookEndMinute.value + ":00";
			var bookChildId = (this.in_BookChild ? (this.in_BookChild.value ? this.in_BookChild.value : this.in_BookChild.dataset.idx) : 0);
			exitPopUp ();
			
			var ajax_bookSlot = {};
			ajax_bookSlot.script = "book_slot";
			ajax_bookSlot.params = "in_SlotId=" + this.bookingSlot.data.AO_SLOT_id + "&in_BookChildId=" + bookChildId + "&in_BookStartTime=" + bookStartTime + "&in_BookEndTime=" + bookEndTime;
			ajax_bookSlot.formdata = false;
			ajax_bookSlot.slotId = this.bookingSlot.data.AO_SLOT_id;
			ajax_bookSlot.progress = function (progress) {
			}
			ajax_bookSlot.error = function (error) {
				if (error) {
					if (error == "nochild") window.location.assign("./connexion");
					else showError (error);
				}
				else showError ("Erreur pendant la mise à jour");
			}
			ajax_bookSlot.abort = function () {
			}
			ajax_bookSlot.load = function (returnObject) {
			
				that.bookingSlot.planning.reloadWeek ();
				showError ("Créneau réservé.");
			}
			ajax_bookSlot.loadEnd = function () {
			}
			console.log (ajax_bookSlot.params);
			this.xhr_bookSlot = ajaxCall(ajax_bookSlot);
		}
	}
}

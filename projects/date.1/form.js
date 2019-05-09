

// On commence par selectionner les input
const inputDay = document.getElementById('inputDay');
const inputMonth = document.getElementById('inputMonth');
const inputYear = document.getElementById('inputYear');
const inputMH = document.getElementById('inputMH');
const inputMM = document.getElementById('inputMM');
const inputAH = document.getElementById('inputAH');
const inputAM = document.getElementById('inputAM');
const button = document.getElementById('button');
const error = document.getElementById('error');

// On définit la date actuelle
var date = new Date();
var nowDay = date.getDate();
var nowMonth = date.getMonth();
var nowYear = date.getFullYear();

// On définit les valeurs par default des inputs;
var defaultDay = inputDay.defaultValue = nowDay + 1;
var defaultMonth = inputMonth.defaultValue = nowMonth;
var defaultYear = inputYear.defaultValue = nowYear;

// On initialise une var de validation à true et on la retourne à chaque validation des fonctions déclarées qui suivent
var isValid = true;
// On focus sur l'input jour au chargement de la page
inputDay.focus();


// Vérifie que la saisie est un nombre
function number(value, string) {
  if (!isNaN(value)) {
    button.disabled = true;
    error.textContent = "";
    return isValid;
  } else {
    error.textContent = "Le champ " + string + " est vide ou n'est pas un nombre";
    return !isValid;
  }
}

// Vérifie que la saisie est comprise entre le nbr1 et le nbr2
function numberBetween(value, string, nbr1, nbr2) {
  if (value >= nbr1 && value <= nbr2) {
    error.textContent = "";
    return isValid;
  } else {
    error.textContent = "Le champ " + string + " n'est pas compris entre " + nbr1 + " et " + nbr2;
    return !isValid;
  }
}

// On vérifie l'input saisie du jour
function day() {

  // La saisie de l'input est stocké dans une var simple et intuitive
  var day = parseInt(inputDay.value);
  string = "' jour '";

  if (number(day, string)) {
    if (numberBetween(day, string, 1, 31)) {
      if (day >= 4 || day === 30 || day === 31) {
        inputMonth.focus();

        return isValid;
      }
    }
  }
}

// On vérifie l'input saisie du mois
function month() {

  // La saisie de l'input est stocké dans une var simple et intuitive
  var month = parseInt(inputMonth.value);
  var string = "' mois '";

  if (number(month, string)) {
    if (numberBetween(month, string, 1, 12)) {
      if (month !== 1) {
        inputYear.focus();

        return isValid;
      }
    }
  }
}

// On vérifie l'input saisie de l'année
function year() {

  // La saisie de l'input est stocké dans une var simple et intuitive
  var year = parseInt(inputYear.value);
  var string = "' année '";

  if (number(year, string)) {
    if (year < 1000 || numberBetween(year, string, 2018, 3000)) {
      if (year > 2017) {
        inputMH.focus();

        return isValid;
      }
    }
  }
}

// Vérifie que la saisie est une heure valide
function checkHour(hour, inputToValue, inputToFocus, time, nbr1 = 0, nbr2 = 23) {
  hour = parseInt(inputToValue.value);
  string = "' heure de " + time + " '";
  if (number(hour, string)) {
    if (numberBetween(hour, string, nbr1, nbr2)) {
      if (hour === 0 || hour >= 3) {
        inputToFocus.focus();

        return isValid;
      }
    }
  }
}

// On vérifie l'input saisie de l'heure du matin
function mh() {
  if (checkHour(mh, inputMH, inputMM, time = "début")) {

    return isValid;
  }
}

// On vérifie l'input saisie de l'heure de l'après-midi
function ah() {
  if (checkHour(ah, inputAH, inputAM, time = "fin")) {

    return isValid;
  }

}

// Vérifie que la saisie sont des minutes valides
function checkMin(min, inputToValue, inputToFocus, time, nbr1 = 0, nbr2 = 59) {

  var min = parseInt(inputToValue.value);
  var string = "' minutes de " + time + " '";
  if (number(min, string)) {
    if (numberBetween(min, string, nbr1, nbr2)) {
      if (min === 0 || min >= 6) {
        inputToFocus.focus();

        return isValid;
      }
    }
  }
}

// On vérifie l'input saisie des minutes du matin
function mm() {
  if (checkMin(mm, inputMM, inputAH, time = "début")) {
    return isValid;

  }
}

// On vérifie l'input saisie des minutes de l'après-midi
function am() {
  if (checkMin(am, inputAM, button, time = "fin")) {
    return isValid;

  }
}

// On valide le form si les fonctions de tests retourne isValid
function validForm(event) {
  if (day() && month() && year() && mh() && mm() && ah() && am()) {
    // alors le formulaire est valide
    // ICI les requêtes SQL j'imagine ??
  } else {
    error.textContent = 'Formulaire non valide';
    event.preventDefault();
  }
}

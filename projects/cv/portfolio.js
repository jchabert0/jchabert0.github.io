"use strict";

var home = "<h3 class='underlineCSS'><strong>A propos de moi</strong></h3> \
<p> Après sept ans dans le prêt-à-porter, j'ai eu envie de découvrir un métier plus cérébral. \
<br> L'idée de cette reconversion professionnelle est de retrouver l'esprit cartésien de mes études tout en gardant \
l'esprit d'équipe de mes années en poste. \
<br> Alors, pourquoi pas le développement web ? \
<br> \
<br>L'objectif de ce site est de mettre en avant mes compétences de développeur Front-end. \
<br> J'ai utilisé les langages HTML, CSS et JavaScript. \
<br> Il n'y a volontairement ni framework, ni librairie, sauf pour le responsive web qui est assuré par les colonnes Bootstrap. \
<br> L'idée est de montrer ma compréhension de l'architecture web. \
</p > \
";

var xp = "<h3 class='underlineCSS'><strong>Développeur front - Stage</strong></h3> \
<h4><span class='colorBlue'>Babily</span> La Cordée / De décembre 2018 à janvier 2019</h4> \
<p>Il s'agit de mon stage de fin de formation. \
  <br> J'ai assisté Nicolas Lorut dans son projet de création d’un service innovant pour les crèches et les familles, \
  l'objectif étant de faciliter la concordance entre l’offre de places et la demande.</p> \
<ul class='listCSS'> \
  <li>utilsation de HTLM5, CSS3 et massivement JavaScript.</li> \
  <li>objectif à la journée avec une autonomie de recherche et une prise en compte des requêtes de Nicolas.</li> \
  <li>travail en local : développement complet d'une solution.</li> \
  <li>mise en place du POO avec la satisfaction de Nicolas.</li> \
</ul> \
<p>Ce stage m'a permis d'avoir une meilleure compréhension du JavaScript.</p> \
<h4 class='underlineCSS'><strong>Vendeur - Magasinier</strong></h4> \
<h5><span class='colorBlue'>H&M</span> Carré de Soie - Vaulx-en-Velin / De septembre 2011 à avril 2018</h5> \
<p>Sept ans de polyvalence au sein de ce magasin de prêt-à-porter :</p> \
<ul class='listCSS'> \
  <li>collaboration avec l'équipe sur l'organisation journalière.</li> \
  <li>autonomie sur ma zone de vente.</li> \
  <li>conseil client.</li> \
  <li>maintenance du magasin.</li> \
</ul> \
";

var school = "<h3 class='underlineCSS'><strong>Développeur Web fullstack</strong></h3> \
<h4><span class='colorBlue'>Simplon Lyon</span></h4> \
<p> Villeurbanne / d'avril 2018 à novembre 2018</p> \
<h4 class='underlineCSS'><strong>Licence de Physique</strong></h4> \
<h5><span class='colorBlue'>Université Claude Bernard</span></h5> \
<p>La Doua / de septembre 2010 à septembre 2011</p> \
<h5 class='underlineCSS'><strong>Bac Scientifique</strong></h5> \
<h6><span class='colorBlue'>Lycée Lacassagne</span><h6> \
<p>Lyon 3e / Juin 2009</p> \
";

var hobby = "<div class='container'> \
<div class='row'> \
<div class='col-6'> \
<h4 class='underlineCSS'><strong>Sport:</strong></h4> \
<ul class='listCSS'> \
  <li>course à pied</li> \
  <li>activités de plein air</li> \
  <li>fitness</li> \
</ul> \
</div> \
<div class='col-6'> \
<h4 class='underlineCSS'><strong>Jeux Vidéo:</strong></h4> \
<h5><p class='colorBlue'>style: </p></h5> \
<ul class='listCSS'> \
  <li>open world</li> \
</ul> \
<h5><p class='colorBlue'>studios: </p></h5> \
<ul class='listCSS'> \
  <li>naughty dog</li> \
  <li>CD project red</li> \
</ul> \
</div> \
</div> \
</div> \
";

var technos = "<div class='container'> \
<div class='row'> \
    <h4 class='col-12 underlineCSS'> \
      <strong>Front</strong> \
    </h4> \
    <div class ='col-4'> \
    <h5 class='colorBlue centerCSS'>Langages: </h5> \
    <ul class='listNoCSS'> \
      <li>HTML</li> \
      <li>CSS</li> \
      <li>Javascript</li> \
    </ul> \
    </div> \
    <div class ='col-4'> \
    <h5 class='colorBlue centerCSS'>Framework: </h5> \
    <ul class='listNoCSS'> \
      <li>Angular</li> \
      <li>Vue</li> \
    </ul> \
    </div> \
    <div class ='col-4'> \
    <h5 class='colorBlue centerCSS'>Autres: </h5> \
    <ul class='listNoCSS'> \
      <li>Boostrap</li> \
      <li>Jquery</li> \
      <li>POO</li> \
      <li>Gitlab</li> \
    </ul> \
    </div> \
    <h4 class='col-12 underlineCSS'> \
      <strong>Back</strong> \
    </h4> \
    <div class ='col-4'> \
    <h5 class='colorBlue centerCSS'>Langages: </h5> \
    <ul class='listNoCSS'> \
      <li>PHP</li> \
    </ul> \
    </div> \
    <div class ='col-4'> \
    <h5 class='colorBlue centerCSS'>Framework: </h5> \
    <ul class='listNoCSS'> \
      <li>Symfony</li> \
    </ul> \
    </div> \
    <div class ='col-4'> \
    <h5 class='colorBlue centerCSS'>Autres: </h5> \
    <ul class='listNoCSS'> \
      <li>Doctrine</li> \
    </ul> \
    </div> \
</div> \
</div> \
";


var htmlText;


function onclickLi(liId) {
  document.getElementById(liId).addEventListener('click', function writeHtmlText() {

    switch (liId) {
      case 'technos':
        htmlText = technos;
        break;
      case 'xp':
        htmlText = xp;
        break;
      case 'school':
        htmlText = school;
        break;
      case 'hobby':
        htmlText = hobby;
        break;
      case 'home':
        htmlText = home;
        break;
      default:
        break;
    }

    document.getElementById('HtmlText').innerHTML = '';
    document.getElementById('HtmlText').innerHTML += htmlText;
  });
}

onclickLi('technos');
onclickLi('xp');
onclickLi('school');
onclickLi('hobby');
onclickLi('home');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnToTop").style.display = "block";
  } else {
    document.getElementById("btnToTop").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

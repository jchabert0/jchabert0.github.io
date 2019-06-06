
//SortableJS-----!IMPORTANT => n'accepte que "getElementById"

//On selectionne par l'id la balise qui contient les éléments que l'on veut drag & drop
let draggableListLeft = document.getElementById('draggableListLeft');

//puis on les rend drag & drop
let sortable = Sortable.create(draggableListLeft, {
  group: "List", // avec le même nom de la liste avec laquelle on veut intéragir
  // avec un nom diférent pour des intéractions intra-liste
  filter: ".title", // selecteur css, les tags ne sont plus drag & drop
  disabled: false,  // permet de rendre une liste non drag & drop si true (voir doc git)
  store: null,  // permet de sauvegarder l'ordre des déplacment en les poussant dans un tableau sauvé dans le local storage (voir doc git)
  animation: 150, //effet de visuel de transfert
  handle: null, //css selecteur, pas compris l'utilitée
  fallbackTolerance: 0, // nbr de pixel en déplacement avant d'être considéré comme un drag
  ghostClass: "ghost", // les règles css pour l'emplacement temporaire de l'élément
  dragClass: "dragg", // les règles css pour l'élément draggé
  handle: ".handle", // ex: <span class="handle">☰</span> permet de mettre une zone ou cliquer activer le dragg


  // réussir la fonction clone pour factoriser le code = cloner le premier sortable puisqu'il ont les même propriétées

  onClone: function (/**Event*/evt) {
    let origEl = evt.item;
    let cloneEl = evt.clone;
  }
});

//On selectionne une seconde liste
let draggableListRight = document.getElementById('draggableListRight');

let sortable2 = Sortable.create(draggableListRight, { // 
  group: "List",
  filter: ".title",
  animation: 150,
  ghostClass: "ghost",
  dragClass: "dragg",
  handle: ".handle",
});
